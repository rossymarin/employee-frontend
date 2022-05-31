/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Card.css';

export default function Card({ image, section, view, data, width, margin, visibility, padding, ml, width2}) {
  
  return (
    <div className="card" style={{width: width, margin: margin}}>
      <img className="card-img-top" src={data ? data.foto : image} style={{width: width2, marginLeft: ml, padding: padding}} alt="Card image cap"/>
      <div className="card-body" style={{display: visibility}}>
          <h5 className="card-title">{section}</h5>
          <a href="#" className="btn btn-primary" onClick={view}>Ir a</a>
      </div>
    </div>
  )
}