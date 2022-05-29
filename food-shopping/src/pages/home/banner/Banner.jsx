import React from 'react';
import './style.css';
import BannerImg from './banner.png';
import Logo from '../../../components/common/Logo/Image';

const Banner = () => {
  return (
    <header>
        <div className="header-content">
            <Logo />
            <div className="content-main">
                <h1>Delicous food for your cravings</h1>
                <p>We made fresh and healthy meals with different recipes</p>
                <button>View Menu <i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
        </div>
        <img src={BannerImg} className="header-img" alt=""/>
        </header>
  )
}

export default Banner;
