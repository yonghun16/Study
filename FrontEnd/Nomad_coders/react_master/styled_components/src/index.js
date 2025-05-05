import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
  boxColor: "lightgray",
}

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
  boxColor: "black",
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
