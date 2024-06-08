import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shop from '../components/Shop/Shop';
import backshopImage from '../assets/images/backshop.png';
import './ShopPage.css';

function ShopPage() {
  const [coins, setCoins] = useState(0);
  const [professions, setProfessions] = useState([
    { name: 'Agriculteur', cost: 50, income: 5, interval: 2000, purchased: false },
    { name: 'Vigneron', cost: 100, income: 10, interval: 3000, purchased: false },
    { name: 'Boulanger', cost: 200, income: 20, interval: 4000, purchased: false },
    { name: 'Fromager', cost: 400, income: 40, interval: 5000, purchased: false },
  ]);

  useEffect(() => {
    const intervals = professions.map((profession) => {
      if (profession.purchased) {
        return setInterval(() => {
          setCoins((prevCoins) => prevCoins + profession.income);
        }, profession.interval);
      }
      return null;
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [professions]);

  const handleBuyProfession = (index) => {
    const newProfessions = [...professions];
    const profession = newProfessions[index];
    if (coins >= profession.cost && !profession.purchased) {
      setCoins(coins - profession.cost);
      profession.purchased = true;
      setProfessions(newProfessions);
    }
  };

  return (
    <div className="shop-page">
      <div className="shop-content">
        <h1>Shop</h1>
        <p>Coins: {coins}</p>
        <Shop professions={professions} onBuyProfession={handleBuyProfession} />
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default ShopPage;
