// src/components/YourBotArmy.js

import React from 'react';

const YourBotArmy = ({ yourArmy, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>BOT ARMY RECRUIT LIST</h2>
      <div className="your-army">
        {yourArmy.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;

