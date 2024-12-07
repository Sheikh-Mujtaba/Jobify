const express = require('express');
const cors = require('cors');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const authRoutes = require('./routes/authRoutes');
const vacancyRoutes = require('./routes/vacancyRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // React app's origin
  credentials: true,
}));
app.use(sessionMiddleware);

// Routes
app.use('/auth', authRoutes);
app.use('/vacancies', vacancyRoutes);
app.use('/categories', categoryRoutes);

// Server
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
