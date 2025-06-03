# bycript

## 기본 사용법
### 1. 비밀번호 해시화
```js
const bcrypt = require('bcrypt');

const plainPassword = 'mySecret123';
const saltRounds = 10; // 숫자가 클수록 보안 ↑, 속도 ↓

bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
  if (err) throw err;
  console.log('Hash:', hash);
});
```

#### (Async/Await 버전)
```js
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  console.log('Hash:', hash);
}

hashPassword('mySecret123');
```


### 2. 비밀번호 비교
```js
const bcrypt = require('bcrypt');

const plainPassword = 'mySecret123';
const hashedPassword = '$2b$10$E6....'; // 저장된 해시

bcrypt.compare(plainPassword, hashedPassword, function (err, result) {
  if (err) throw err;
  console.log('Match:', result); // true or false
});
```

#### (Async/Await 버전)
```js
const bcrypt = require('bcrypt');

async function checkPassword(password, hashedPassword) {
  const match = await bcrypt.compare(password, hashedPassword);
  console.log('Match:', match);
}

checkPassword('mySecret123', '$2b$10$E6....');
```


### 3. 몽구스 middleware 적용
```js
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
```
