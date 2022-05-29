import React from 'react';
import './style.css';

const Buttons = ({ quantity, addItem, removeItem}) => {
  return (
    <div className="btnAddRemove">
        {quantity !==0 ? (
        <div className= "butAddRemove-positive">
            <i 
            className='fa fa-minus' 
            aria-hidden='true' 
            onClick={removeItem}
            ></i>
            <span>{quantity}</span>
            <i className='fa fa-plus' aria-hidden='true' onClick={addItem}></i>
        </div>
         ) : (
        <div className="btnAddRemove-negative" onClick={addItem}>
            <span>ADD</span>
            <i className="fa fa-plus"></i>
            </div>
        )}
    </div>
  )
}

export default Buttons;