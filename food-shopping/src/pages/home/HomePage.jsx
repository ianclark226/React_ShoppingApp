import React from 'react';
import CartCounterButton from '../../components/common/cartcounterbutton/CartCounterButton';
import Footer from '../../components/common/footer/Footer';
import { menuItemsData } from '../../components/common/menu/Data';
import Menu from '../../components/common/menu/Menu';
import Banner from './banner/Banner';
import './style.css';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Menu list={menuItemsData}/>
      <Footer />
      <CartCounterButton />
    </div>
  )
}

export default HomePage;


