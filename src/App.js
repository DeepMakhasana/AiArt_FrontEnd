import React from 'react';
import {BrowserRouter as Routers, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Upload from './components/Upload';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './Layout';
import Images from './components/Images';

function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/images' element={<Images/>} />
            <Route path='/upload' element={<Upload/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Route>
        </Routes>
      </Routers>
    </>
  );
}

export default App;
