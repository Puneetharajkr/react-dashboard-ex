import React from 'react';
import './ActivityFeed.css';

const activityData = [
  { day: 'Mon', value: 30 },
  { day: 'Tue', value: 50 },
  { day: 'Wed', value: 70 },
  { day: 'Thu', value: 40 },
  { day: 'Fri', value: 20 },
  { day: 'Sat', value: 60 }
];

function ActivityFeed() {
  return (
    <section className="activity-feed">
      <h2 className="section-title">Activity</h2>
      <p className="activity-summary">3 appointments this week</p>
      
      <div className="activity-chart">
        <div className="bars-container">
          {activityData.map((item, index) => (
            <div key={index} className="bar-wrapper">
              <div 
                className="activity-bar" 
                style={{ height: `${item.value}px` }}
              ></div>
              <span className="day-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivityFeed;