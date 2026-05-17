import { useState } from 'react';
import axios from '../utils/axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post('/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 flex items-center justify-center text-white py-20">
      <div className="max-w-2xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact <span className="text-cyan-400">Me</span></h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-4">Feel free to reach out for any opportunities!</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-cyan-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center mt-4">Something went wrong. Try again!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;