import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(
    () => {
      console.log('💽✅ DB connected');
    },
    (err) => {
      console.log(err);
    }
  )

// Middleware
app.use(cors());
app.use(express.json());  // req.body를 자바스크립트 객체로 파싱
app.use(express.urlencoded({ extended: true }));    // req.body를 키/값 쌍 객체로 파싱 (중첩 구조도 가능)

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

/* 정적 파일 서비스 */
// ES 모듈 방식 (__dirname 직접 구현)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, '../uploads')));


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
