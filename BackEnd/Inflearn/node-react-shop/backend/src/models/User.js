import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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


// 🛠 비밀번호 해싱 미들웨어
userSchema.pre('save', async function (next) {
  const user = this;

  // 비밀번호가 변경되었을 때만 해시
  if (!user.isModified('password')) return next();

  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(user.password, saltRounds);
    user.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});



const User = mongoose.model('User', userSchema);  // User 모델은 몽구스를 통해 몽고DB와 연결됨.

export default User;
