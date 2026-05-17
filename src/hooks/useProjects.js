import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(res => setProjects(res.data));
  }, []);
  return projects;
};