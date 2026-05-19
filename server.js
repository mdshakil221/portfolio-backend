import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

if (process.env.NODE_ENV !== 'production') {
  const dotenv = await import('dotenv');
  dotenv.config();
}

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

console.log('MONGO_URI exists:', !!process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => {
    console.log('MongoDB connection error:', err.message);
  });