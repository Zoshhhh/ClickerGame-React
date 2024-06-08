import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Clicker from '../components/Clicker/Clicker';
import Score from '../components/Score/Score';
import shopImage from '../assets/images/shop.png';
import './Home.css';

function Home() {
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
    setCoins(coins + 1);
  };

  return (
    <div className="home">
      <div className="main-content">
        <h1>Clicker Game</h1>
        <Clicker onClick={handleClick} />
        <Score score={score} />
        <p>Coins: {coins}</p>
        <Link to="/shop">
          <img src={shopImage} alt="Shop" className="shop-link" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
