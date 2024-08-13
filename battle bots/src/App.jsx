// src/App.js

import React, { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BackgroundVideo from './BackgroundVideo';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
     .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (bot) => {
    if (!yourArmy.some(b => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    setYourArmy(yourArmy.filter(b => b.id !== botId));
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE'
    });
  };

  return (
    <div>
      
      <BackgroundVideo/>
      <h1>BATTLE BOTS ARMY RECRUITMENT</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy yourArmy={yourArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};



export default App;
