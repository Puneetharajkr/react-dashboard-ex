import React from 'react';
import './UpcomingSchedule.css';

function AppointmentGroup({ day, events }) {
  return (
    <div className="appointment-group">
      <h4 className="appointment-day">{day}</h4>
      {events.map((event, index) => (
        <div key={index} className="appointment-event">
          {event.title && <p className="appointment-title">{event.title}</p>}
          {event.time && <span className="appointment-time">{event.time}</span>}
        </div>
      ))}
    </div>
  );
}

export default AppointmentGroup;