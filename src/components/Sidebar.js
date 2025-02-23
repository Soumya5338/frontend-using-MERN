import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ projects, onAddProject, onDeleteProject }) => {
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");

  const handleAddProject = () => {
    if (newProjectName && newProjectDescription) {
      const newProject = {
        id: projects.length + 1,
        name: newProjectName,
        description: newProjectDescription,
      };
      onAddProject(newProject); // Add the new project to the parent component
      setNewProjectName(""); // Reset the form fields
      setNewProjectDescription("");
    }
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-lg font-semibold mb-6">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="flex justify-between items-center">
            <Link
              to={`/project/${project.id}`}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              {project.name}
            </Link>
            {/* Delete Button */}
            <button
              onClick={() => onDeleteProject(project.id)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Add New Project */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Add New Project</h3>
        <input
          type="text"
          placeholder="Project Name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          className="w-full p-2 mb-2 text-black"
        />
        <textarea
          placeholder="Project Description"
          value={newProjectDescription}
          onChange={(e) => setNewProjectDescription(e.target.value)}
          className="w-full p-2 mb-2 text-black"
        />
        <button
          onClick={handleAddProject}
          className="w-full bg-blue-500 text-white py-2 rounded mt-2"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default Sidebar;





