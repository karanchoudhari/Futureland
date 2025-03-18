import React, { useState } from "react";
import AddProject1 from "./addProject1";
import ProjectList from "./projectlist";
import AOS from "aos";
import "aos/dist/aos.css";
import { Plus, X } from "lucide-react";

AOS.init();

const Addproject = () => {
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const handleAddProjectClick = () => {
    setShowAddProjectForm(true);
    setEditingProject(null);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowAddProjectForm(true);
  };

  const handleCloseForm = () => {
    setShowAddProjectForm(false);
    setEditingProject(null);
  };

  return (
    <>
    
    <div className="container-fluid gap-5"
      style={{
        overflow: 'auto',
        height: '100vh',
        width: '100%',
        scrollbarWidth: '1px',
        msOverflowStyle: 'none'
      }}>
      
    <div className="relative p-6 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Project List</h1>

      {/* Add Project Button */}
      <button
        onClick={handleAddProjectClick}
        className="fixed top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
        >
        <Plus className="w-6 h-6" />
      </button>

      {/* Project List */}
      <ProjectList onEditProject={handleEditProject} />

      {/* Add Project Form Modal */}
      {showAddProjectForm && (
        <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={handleCloseForm}
        >
          <div
            className="bg-white rounded-lg p-8 w-11/12 max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
            data-aos="fade-left"
            >
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
              >
              <X className="w-6 h-6" />
            </button>
            <AddProject1
              editingProject={editingProject}
              onClose={handleCloseForm}
              />
          </div>
        </div>
      )}
    </div>
      </div>
      </>
  );
};

export default Addproject;