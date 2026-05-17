import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from '../utils/axios';

const AdminDashboard = () => {
  const { token, logout } = useAuth();
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '', description: '', tech: '', githubUrl: '', liveUrl: '',
  });
  const [editId, setEditId] = useState(null);
  const [msg, setMsg] = useState('');

  const fetchProjects = async () => {
    const res = await axios.get('/api/projects');
    setProjects(res.data);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData, tech: formData.tech.split(',').map(t => t.trim()) };
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      if (editId) {
        await axios.put(`/api/projects/${editId}`, data, config);
        setMsg('Project updated!');
      } else {
        await axios.post('/api/projects', data, config);
        setMsg('Project added!');
      }
      setFormData({ title: '', description: '', tech: '', githubUrl: '', liveUrl: '' });
      setEditId(null);
      fetchProjects();
    } catch {
      setMsg('Something went wrong!');
    }
  };

  const handleEdit = (project) => {
    setEditId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      tech: project.tech.join(', '),
      githubUrl: project.githubUrl || '',
      liveUrl: project.liveUrl || '',
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    await axios.delete(`/api/projects/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProjects();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-cyan-400">Admin Dashboard</h1>
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-400 transition">Logout</button>
      </div>

      {/* Form */}
      <div className="bg-gray-800 p-6 rounded-2xl mb-8">
        <h2 className="text-lg font-semibold mb-4">{editId ? 'Edit Project' : 'Add New Project'}</h2>
        {msg && <p className="text-cyan-400 text-sm mb-4">{msg}</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Title" value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          <textarea placeholder="Description" value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none" rows={3} required />
          <input type="text" placeholder="Tech (comma separated): React, Node.js, MongoDB" value={formData.tech}
            onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          <input type="text" placeholder="GitHub URL" value={formData.githubUrl}
            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="text" placeholder="Live URL" value={formData.liveUrl}
            onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <button type="submit"
            className="bg-cyan-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
            {editId ? 'Update Project' : 'Add Project'}
          </button>
          {editId && (
            <button type="button" onClick={() => { setEditId(null); setFormData({ title: '', description: '', tech: '', githubUrl: '', liveUrl: '' }); }}
              className="bg-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-500 transition">
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.tech.join(', ')}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => handleEdit(project)}
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm hover:bg-yellow-300 transition">Edit</button>
              <button onClick={() => handleDelete(project._id)}
                className="bg-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-400 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;