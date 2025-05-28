import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ appointment }) {
  return (
    <div className="appointment-card">
      <h3 className="appointment-title">{appointment.title}</h3>
      <div className="appointment-times">
        {appointment.times.map((time, index) => (
          <span key={index}>{time}</span>
        ))}
      </div>
      {appointment.doctor && (
        <p className="appointment-doctor">{appointment.doctor}</p>
      )}
    </div>
  );
}

export default SimpleAppointmentCard;