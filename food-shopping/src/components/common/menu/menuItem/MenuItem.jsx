import React from 'react';
import './style.css';
import Buttons from '../../buttons/Buttons';


const MenuItem = ({item}) => {
    const { id, name, info, price, img } = item;
  return (
    <div className='item'>
        <img src={img} alt="item" />
        <div className="item-head_desc">
            <p className='head_desc-name'>{name}</p>
            <p className='head_desc-info'><small>{info}</small></p>
        </div>
        <div className="item-foot_desc">
            <span className='foot_desc-price'>${price}</span>
            <Buttons quantity={20} />
        </div>
    </div>
  )
}

export default MenuItem