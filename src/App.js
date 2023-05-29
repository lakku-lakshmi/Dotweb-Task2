import React from 'react';
import {NavLink, Switch, BrowserRouter} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import {SignUp} from './Auth/Signup';
import { Provider } from 'react-redux';
import {Addemploy} from './screens/Addemploy';
import {Table} from './components/Table';
import { PermDeviceInformationSharp } from '@mui/icons-material';

 function App() {
  return (
       <BrowserRouter>
       <Routes>
          <Route path ="/addEmploy" element ={<Addemploy/>}/> 
          <Route path ="/employDetails" element ={<Table/>}/> 
       </Routes>
      </BrowserRouter>
  );
}

export default App;