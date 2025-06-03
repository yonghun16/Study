import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
  },
  role: {
    type: Number,
    default: 0,   // 0은 일반유저, 1은 관리자
  },
  image: String
});

const User = mongoose.model('User', userSchema);  // User 모델은 몽구스를 통해 몽고DB와 연결됨.

export default User;
