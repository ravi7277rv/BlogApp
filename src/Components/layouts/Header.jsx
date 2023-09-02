import React from 'react';
import './NavHeaFoo.css'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Header = ({  width }) => {
  const {title} = useContext(DataContext);
  return (
    <header className='header'>
      <h1>{title}</h1>
      {width < 768 ? <PhoneIphoneIcon style={{color:'blue'}}/>
        : width < 992 ? <TabletMacIcon style={{color:'black'}}/>
          : <LaptopMacIcon style={{color:'black'}} />}
    </header>
  );
}

export default Header;
