import React, { Component } from 'react';
import './Header.css';

const Header = ({image, height}) => {
    return (
      <div className="header" style={{height:height}}>
            <img width="250px" height="80px" className="header_logo ml-50" src={image} alt="header"/>

        </div>
    );
}

export default Header
