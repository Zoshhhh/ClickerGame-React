import React from 'react';
import './Clicker.css';
import raisinImage from '../../assets/images/raisin.png';

function Clicker({ onClick }) {
  return (
    <button
      className="clicker-button"
      onClick={onClick}
      style={{ backgroundImage: `url(${raisinImage})` }}
    >
      <span className="sr-only">Click me!</span>
    </button>
  );
}

export default Clicker;
