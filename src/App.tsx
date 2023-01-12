import React, { useState } from 'react';
import { Container } from '@mui/material';
import MuiDrawer from './components/MuiDrawer';
import Products from './pages/Products';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Users from './pages/Users';

const drawerWidth = 240;

function App() {

  return (
    <>
      <Container sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}>
        <MuiDrawer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
