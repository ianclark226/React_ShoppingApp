import React from 'react';
import './style.css';
import emptyCartImage from './emptycart.png'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {

    let navigate = useNavigate();
  return (
    <div className='empty-cart'> 
        <img src={emptyCartImage} alt="empty" />
        <button onClick={() => navigate('/')}>
            <i class="fas fa-long-arrow-alt-left"></i> Shop Now
        </button>
    </div>
  )
}

export default EmptyCart