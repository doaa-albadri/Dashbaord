import React, { useState } from 'react';
import { Container } from '@mui/material';
import MuiDrawer from './components/MuiDrawer';
import Products from './pages/Products';
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/Users/User';
import harry from './assets/imgs/harrypotter.jpg'
import ron from './assets/imgs/ronweasley.jpg'
import hermoine from './assets/imgs/hermionegranger.jpg'
import luna from './assets/imgs/lunalovegood.jpg'
import neville from './assets/imgs/nevillenongbottom.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';

const drawerWidth = 240;

export type TableItem = {
  img: string,
  name: string,
  phone: number,
  address: string,
  btn?: React.ReactElement
}

export type TableProps = {
  data: TableItem[]
  tableHeaders: string[]
  onClick: (user: TableItem) => void
}

function App() {
  const [selectedUser, setSelectedUser] = useState<TableItem>({
    img: '',
    name: '',
    phone: 0,
    address: '',
  })

  const navigate = useNavigate()


  const usersTableHeaders = [
    '', 'Name', 'Phone', 'Address', ''
  ]

  function createData(
    img: string,
    name: string,
    phone: number,
    address: string,
    btn: React.ReactElement
  ) {
    return { img, name, phone, address, btn };
  }

  const usersData = [
    createData(harry, 'Harry Potter', 974635333, 'address', <VisibilityIcon />),
    createData(ron, 'Ron Weasely', 345098976, 'address', <VisibilityIcon />),
    createData(hermoine, 'Hermoine Granger', 262377747, 'address', <VisibilityIcon />),
    createData(luna, 'Luna Lovegood', 305836799, 'address', <VisibilityIcon />),
    createData(neville, 'Neville Longbottom', 356009876, 'address', <VisibilityIcon />),
  ];

  const onView = (user: TableItem) => {
    setSelectedUser(user)
    navigate('/user')
  }

  // console.log(selectedUser)

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
          <Route path='/users' element={<Users onClick={onView} data={usersData} tableHeaders={usersTableHeaders} />} />
          <Route path='/user' element={<User user={selectedUser} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
