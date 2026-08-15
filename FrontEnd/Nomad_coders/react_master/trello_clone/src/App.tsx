import './App.css'
import { useRecoilState } from 'recoil'

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState)
  return (
    <>
      <input type="number" placeholder="Minutes" />
      <input type="number" placeholder="Hours" />
    </>
  )
}

export default App
