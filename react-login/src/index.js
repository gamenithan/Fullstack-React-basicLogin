import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import SignInSide from './login';
import Album from './album';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>   
      <Route path="/" element={<SignInSide />} />
      <Route path="/login" element={<SignInSide />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/album" element={<Album />} />
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// asdasd
