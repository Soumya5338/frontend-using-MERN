import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ProjectDetail from "./components/ProjectDetail";
import ContactUs from "./components/ContactUs";
import Task from "./components/Task";
import ProjectManagementUses from "./components/ProjectManagementUses"; // Import the new component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", description: "This is Project 1" },
    { id: 2, name: "Project 2", description: "This is Project 2" },
    { id: 3, name: "Project 3", description: "This is Project 3" },
  ]);

  const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });

  const handleLogin = (email, password) => {
    setUserCredentials({ email, password });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserCredentials({ email: "", password: "" });
  };

  const addProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const deleteProject = (projectId) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        showLoginButton={!isAuthenticated}
      />

      <div className="flex flex-1">
        <Sidebar
          projects={projects}
          onAddProject={addProject}
          onDeleteProject={deleteProject}
        />

        <div className="flex-1 p-6">
          <Toaster position="top-right" gutter={8} />

          <Routes>
            <Route
              path="/project/:projectId"
              element={
                isAuthenticated ? (
                  <ProjectDetail projects={projects} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Task />
                ) : (
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Welcome to Project Manager</h2>
                    <p className="mb-6 text-gray-600">
                      Get started by managing your projects here. You can view, create, and track the progress of all your projects.
                    </p>
                    <p className="text-lg">
                      Please select or create a new project. To start managing projects, you need to log in first.
                    </p>

                    {/* Link to Project Management Uses */}
                    <div className="mt-6">
                      <Link
                        to="/project-management-uses"
                        className="text-blue-400 hover:text-blue-600"
                      >
                        Learn About Project Management Uses
                      </Link>
                    </div>
                  </div>
                )
              }
            />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* New Route for Project Management Uses */}
            <Route path="/project-management-uses" element={<ProjectManagementUses />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;






