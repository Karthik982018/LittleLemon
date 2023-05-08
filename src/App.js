import React,{Fragment} from 'react';
import './App.css';
import Header from './components/header/header';

import Main from './components/main/main';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <Fragment>
      <main className='main-body'>
      <Header></Header>
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
      </main>

    </Fragment>
  );
}

export default App;
