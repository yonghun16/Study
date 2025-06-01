import express from 'express';
// import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
