import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p className="text-gray-600 mt-4">{project.description}</p>
    </div>
  );
};

export default ProjectDetail;


