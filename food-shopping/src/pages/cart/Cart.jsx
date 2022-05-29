import React from 'react';
import EmptyCart from '../../components/cart/emptycart/EmptyCart';
import Footer from '../../components/common/footer/Footer';
import Logo from '../../components/common/Logo/Image';
import { menuItemsData } from '../../components/common/menu/Data';
import Menu from '../../components/common/menu/Menu';
import './style.css';


const Cart = () => {
  return (
      <div>
    <div className='cart-header'>
        <Logo />
        </div>
        <EmptyCart />
        <div className="orders">
            <h1 className='orders-heading'>Your Orders</h1>
            <div className="orders-menu">
                <Menu list={menuItemsData} />
            </div>
            <h3 className='orders-total'>Your Total $23</h3>
        </div>
        <Footer />
    </div>
    
  )
}

export default Cart