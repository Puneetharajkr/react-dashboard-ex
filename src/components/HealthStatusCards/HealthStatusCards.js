import React from 'react';
import './HealthStatusCards.css';
import { healthData } from '../../data/healthData'

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <div key={index} className="health-card">
          <h3 className={`health-card-title ${item.status}`}>{item.title}</h3>
          <div className="health-card-dates">
            {item.dates.map((date, i) => (
              <div key={i} className="health-card-date">
                <span>date:</span> {date}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;