import React from 'react';
import { menuItemsData } from './Data';
import MenuItem from './menuItem/MenuItem';
import './style.css';


const Menu = ({ list }) => {
  return (
    <main>
        {list.map(item => (
            <MenuItem key={item.id} item={item} />
        ))}
    </main>
  )
}

export default Menu;