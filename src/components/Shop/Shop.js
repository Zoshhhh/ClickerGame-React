import React from 'react';
import './Shop.css';

const Shop = ({ professions, onBuyProfession }) => {
  return (
    <div className="shop">
      <h2>Shop</h2>
      <ul>
        {professions.map((profession, index) => (
          <li key={index}>
            <button
              onClick={() => onBuyProfession(index)}
              disabled={profession.purchased || profession.cost > profession.coins}
            >
              {profession.name} - {profession.cost} coins
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
