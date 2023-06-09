import React,{Fragment} from 'react';
import './App.css';
import Header from './components/header/header';

import Main from './components/main/main';
import Footer from './components/footer/footer';

import { Route,Routes } from 'react-router-dom';
import BookingPage from './components/main/bookingPage';
// import Navigation from './components/navigation/navigation';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Routes>
        <Route path='/' Component={Main}></Route>
        <Route path='/reserve/*' Component={BookingPage}></Route>
      

      </Routes>
      <Footer></Footer>
    
    </Fragment>
  );
}

export default App;
