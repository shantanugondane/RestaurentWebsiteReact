import React from 'react';
import {SubHeading , MenuItem} from '../../components'
import {images , data} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that feets you palatte"/>
      <h1 className="headtext__cormorant">Tonights's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app_specialMenu-menu_wine flex__Center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app_speacialMenu_menu_item "></div>
        {data.wines.map((wine, index)=>(
          <p>{wine.title}</p>
        ))}
      </div>
    </div>
  </div>
);

export default SpecialMenu;
