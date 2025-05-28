import React from 'react';
import './HealthStatusCards.css';

function HealthCard({ title, status, dates }) {
  return (
    <div className="health-card">
      <h3 className={`health-card-title ${status}`}>{title}</h3>
      <div className="health-card-dates">
        {dates.map((date, i) => (
          <div key={i} className="health-card-date">
            <span>date:</span> {date}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthCard;