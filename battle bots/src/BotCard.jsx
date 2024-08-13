// src/components/BotCard.js

import React from 'react';

const BotCard = ({ bot, enlistBot }) => {
  return (
    <div className="bot-card" onClick={() => enlistBot(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <div className='bot-innerthings'>
        <p>HEALTH: {bot.health}</p>
        <p>DAMAGE: {bot.damage}</p>
        <p>ARMOR: {bot.armor}</p>
        <p>CLASS: {bot.bot_class}</p>
        <h5>CATCHPRASE: {bot.catchphrase}</h5>
      </div>
    </div>
  );
};

export default BotCard;
