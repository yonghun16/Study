import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}
const root = createRoot(rootElement);

const render = () => root.render(
  <StrictMode>
    <App 
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
  </StrictMode>,
);

render()
store.subscribe(render)
