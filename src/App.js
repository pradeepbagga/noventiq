import React from 'react';
import Signin from './Components/Auth/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/App.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(App);
