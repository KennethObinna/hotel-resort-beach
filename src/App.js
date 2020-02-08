import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
 import {space_ID,access_Token} from './ytco/myData'
//import logo from './logo.svg';

import './App.css';

function App() {
 // require('dotenv').config()
 //console.log(` accessToken: ${access_Token} Space ID= ${space_ID}  One ${process.env.React_App_SPACE}`)
  
  return (
   <React.Fragment>
   <NavBar/>
   <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/rooms" component={Rooms}/>
<Route exact path="/rooms/:slug" component={SingleRoom}/>
<Route  component={Error}/>
   </Switch>
   </React.Fragment>

   
  
 
  );
}

export default App;
