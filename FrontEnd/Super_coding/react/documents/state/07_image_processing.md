## Image Processing

### image import
```jsx
import AlxaImage from './images/alexa.png';  // 확장자 필요
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <p>hello image</p>
      <img src={AlxaImage} alt="alexa" />   {/* 중괄호 필요*/}
      <img src={SiriImage} alt="siri" />
    </div>
  );
}

export default App;
```
