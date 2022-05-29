import React from 'react';
import './style.css';
import LogoImg from './forkknife.png'

const Image = () => {
  return (
    <div className='logo'>
        <div>
            <img src={LogoImg} alt='logo' />
            <span>
                <b>Taste</b>
            </span>
        </div>
        <p>
            <b>Resturant and BBQ</b>
        </p>
    </div>
  )
}

export default Image;