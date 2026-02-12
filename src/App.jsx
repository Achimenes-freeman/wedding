// import styles from './style.module.scss'
import {useState, useEffect} from 'react';

import DateSplitter from './components/DateSplitter/DateSplitter';
import MainView from './components/MainView/MainView';
import Invite from './components/Invite/Invite';
import Calendar from './components/Calendar/Calendar'
import Address from './components/Address/Address'
import DressCode from './components/DressCode/DressCode';
import Wishes from './components/Wishes/Wishes';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  
  const MAX_MOBILE_SIZE = 767;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      <DateSplitter />
      <MainView/>
      {width <= MAX_MOBILE_SIZE ? <Invite/> : null}
      <Calendar desktop={width > MAX_MOBILE_SIZE}/>
      <DateSplitter />          
      <Address />
      <DressCode />
      <DateSplitter />
      <Wishes />
      <Contacts />
      <DateSplitter />
      <Footer />
      <DateSplitter />
    </>
  )
}

export default App
