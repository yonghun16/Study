## props

#### React가 가진 특징
- 재사용성 : 코드를 반복해서 쓰지 말아라
- 관심사 분리 : 하나의 컴포넌트에 너무 만은 걸 담지 마라
- Component : HTML + JavaScript + CSS

#### props
- 함수에 매개변수를 넣는 것처럼 컴포넌트에 전달하는 값(Properties)
- App -> Component 환경변수 전달 해주기
 - \<App /> 의 num = 10
   - -> \<Component num = {num} />
     - -> \<p>{num}\</p>
```jsx
function App() {
  const messageArray = [
    {
      title: 'Success',
      text: 'Right on1!',
    },
    {
      title: 'Success',
      text: 'Right on2!',
    },
    {
      title: 'Error',
      text: 'Something went wrong1',
    },
    {
      title: 'Error',
      text: 'Something went wrong2',
    },
    {
      title: 'Warning',
      text: 'Be careful1',
    },
    {
      title: 'Warning',
      text: 'Be careful2',
    },
  ];
  return (
    <>
      <div className='wrapper'>
        {
          messageArray.map((message) => 
            <Toast title={message.title} text={message.text} />
        )}
      </div>
    </>
  )
}

```
