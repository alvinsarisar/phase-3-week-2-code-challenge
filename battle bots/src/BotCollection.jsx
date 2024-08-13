// src/components/BotCollection.js

import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div>
      <h2>AVAILABLE BOT UNITS </h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
