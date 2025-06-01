# mongoose

- mongoose는 MongoDB를 Node.js 환경에서 쉽게 사용할 수 있도록 도와주는 ODM(Object Data Modeling) 라이브러리입니다.
- 즉, MongoDB 데이터를 자바스크립트 객체처럼 다룰 수 있게 해줍니다. 관계형 데이터베이스의 ORM과 유사한 역할을 합니다.

### ✅ Mongoose 주요 특징

| 기능                   | 설명 |
|------------------------|------|
| **Schema 기반 모델링** | MongoDB는 schemaless이지만, Mongoose는 스키마를 정의해 일관된 데이터 구조를 유지할 수 있도록 도와줍니다. |
| **Validation**         | 스키마에 따라 데이터 유효성 검사 제공 |
| **Middleware**         | 데이터 저장 전/후, 삭제 전/후 등 다양한 lifecycle hook 지원 (`pre`, `post`) |
| **Query Builder**      | MongoDB 쿼리를 메서드 체이닝 방식으로 작성 가능 |
| **Population**         | 관계형 DB처럼 문서 간 참조(Join 유사)를 처리할 수 있음 |


### 🧱 기본 사용법 예제
#### 1. 연결
```js
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB 연결 성공'))
.catch(err => console.error('MongoDB 연결 실패', err));
```

#### 2. 스키마와 모델 정의
```js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User;
```

#### 3. 데이터 CRUD
- 생성 (Create)
```js
const newUser = new User({ name: '홍길동', age: 25, email: 'hong@example.com' });
await newUser.save();
```

- 조회 (Read)
```js
const users = await User.find({ age: { $gte: 18 } });
```

- 수정 (Update)
```js
await User.updateOne({ name: '홍길동' }, { age: 26 });
```

- 삭제 (Delete)
```js
await User.deleteOne({ email: 'hong@example.com' });
```


### 💡 참고 사항
- Mongoose는 MongoDB 드라이버 위에서 동작하며, 더 높은 수준의 추상화와 기능을 제공합니다.
- mongoose.Schema.Types.ObjectId를 활용해 문서 간 참조도 가능합니다 (populate() 메서드 사용)
