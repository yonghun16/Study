# multer

> https://www.npmjs.com/package/multer
```bash
npm install multer
```

- multer는 Node.js의 Express 프레임워크에서 multipart/form-data 형식의 파일 업로드를 처리하는 미들웨어입니다. 이미지나 문서 같은 파일을 업로드할 때 주로 사용되며, 간단한 설정만으로도 파일 저장, 필터링, 사이즈 제한 등을 처리할 수 있습니다.


## 🔧 주요 기능
| 기능              | 설명                                                                 |
|-------------------|----------------------------------------------------------------------|
| 파일 저장 처리     | 디스크 저장 또는 메모리 저장 방식 선택 가능                          |
| 필터링            | MIME 타입 등으로 업로드 허용/거부 가능                                |
| 사이즈 제한       | 파일 크기 제한 설정 가능 (`limits`)                                   |
| 멀티 파일 처리     | 다중 파일 업로드 지원 (`array`, `fields`)                             |
| 사용자 정의 파일명 | 업로드된 파일의 이름을 자유롭게 커스터마이징 가능                     |


## 🧪 기본 사용 예시
```jsx
const express = require('express');
const multer = require('multer');
const app = express();

// 저장 위치와 파일명 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 저장 경로
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // 파일명 지정
  }
});

const upload = multer({ storage: storage });

// 단일 파일 업로드 (필드 이름이 'image'일 경우)
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('파일 업로드 완료');
});
```

## 🔧 주요 기능
| 기능              | 설명                                                                 |
|-------------------|----------------------------------------------------------------------|
| 파일 저장 처리     | 디스크 저장 또는 메모리 저장 방식 선택 가능                          |
| 필터링            | MIME 타입 등으로 업로드 허용/거부 가능                                |
| 사이즈 제한       | 파일 크기 제한 설정 가능 (`limits`)                                   |
| 멀티 파일 처리     | 다중 파일 업로드 지원 (`array`, `fields`)                             |
| 사용자 정의 파일명 | 업로드된 파일의 이름을 자유롭게 커스터마이징 가능                     |


## ⚙️ 자주 사용하는 옵션 (multer 설정 시)
| 옵션명           | 설명                                                            |
|------------------|-----------------------------------------------------------------|
| `dest`           | 파일 저장 경로 (간단한 사용시 `storage` 대신 사용)              |
| `storage`        | 고급 저장 설정 (위치 및 파일명 지정 가능)                       |
| `limits`         | 업로드 파일 크기 등 제한 설정 (`fileSize` 등)                   |
| `fileFilter`     | 업로드 가능한 파일을 필터링하는 함수 (예: 이미지만 허용)         |


## 🧪 예: 이미지 파일만 업로드 허용
```jsx
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // 이미지 파일 허용
    } else {
      cb(new Error('이미지 파일만 업로드 가능합니다.'), false);
    }
  },
});
```


## 🧪 여러 파일 업로드 예
```jsx
app.post('/uploads', upload.array('photos', 5), (req, res) => {
  // 최대 5개의 파일 업로드 허용
  res.send('여러 파일 업로드 완료');
});
```


## 📁 파일 저장 방식
| 저장 방식        | 설명                                                                 |
|------------------|----------------------------------------------------------------------|
| `diskStorage`     | 파일을 서버의 디스크에 저장. 업로드 경로와 파일명을 자유롭게 설정 가능 |
| `memoryStorage`   | 파일을 메모리에 버퍼 형식으로 저장. S3 같은 외부 저장소에 업로드할 때 유용 |
