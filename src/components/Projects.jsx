import { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My <span className="text-cyan-400">Projects</span></h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project._id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-gray-700 text-cyan-400 text-xs px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-sm text-cyan-400 hover:underline">GitHub</a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm text-green-400 hover:underline">Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;