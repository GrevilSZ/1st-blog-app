import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <nav>
        <Link to="/"> Inicio</Link>
        <Link to="/createpost"> Crear Post</Link>
        <Link to="/login"> Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
