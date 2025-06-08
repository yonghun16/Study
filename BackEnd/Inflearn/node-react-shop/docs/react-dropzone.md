# react-dropzone

> https://react-dropzone.js.org/
```bash
npm install react-dropzone
```


- react-dropzone은 **React 애플리케이션에서 파일 업로드(특히 드래그 앤 드롭 방식)**를 쉽게 구현할 수 있게 해주는 인기 있는 오픈 소스 라이브러리입니다. 
- 간단한 API로 유연한 커스터마이징이 가능하고, 접근성까지 고려되어 있어 많이 사용됩니다.


## 🔧 주요 기능
| 기능              | 설명                                              |
|-------------------|---------------------------------------------------|
| Drag and Drop     | 파일을 끌어다 놓기(drag-and-drop) 지원            |
| File Dialog       | 클릭해서 파일 선택 가능 (`<input type="file" />`) |
| Multiple Files    | 여러 파일 업로드 가능                             |
| File Type Restriction | 파일 확장자 및 MIME 타입 제한 가능            |
| File Size 제한    | 최소/최대 파일 크기 설정 가능                     |
| Custom UI         | UI는 직접 구현, 로직만 `react-dropzone`이 제공    |


## 🧪 기본 사용 예시
```jsx
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>{file.path} - {file.size} bytes</li>
  ));

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>파일을 여기에 드래그하거나 클릭해서 업로드하세요</p>
      <ul>{files}</ul>
    </div>
  );
}
```


## ⚙️ 주요 옵션
```jsx
useDropzone({
  accept: { 'image/*': [] }, // 이미지만 허용
  multiple: false,           // 한 개만 업로드
  maxSize: 5 * 1024 * 1024,  // 최대 5MB
  onDrop: acceptedFiles => {
    // 파일 처리 로직
  },
});
```


## 💡 유용한 팁
- getRootProps와 getInputProps는 반드시 DOM 요소에 spread 해줘야 합니다.
- 파일 유효성 검사는 자동으로 수행되며 rejectedFiles도 받을 수 있습니다.
- 외부 UI 라이브러리와 함께 쉽게 통합 가능합니다 (예: Tailwind, Material-UI 등).
