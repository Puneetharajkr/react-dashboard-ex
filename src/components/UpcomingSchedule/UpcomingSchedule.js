import React from 'react';
import './UpcomingSchedule.css';
import AppointmentGroup from './AppointmentGroup';

const scheduleData = [
  {
    day: "On Thursday",
    events: [
      { title: "Health checking complete", time: "1:50 AM" },
      { title: "Opinkahzologist", time: "1:40 PM" }
    ]
  },
  {
    day: "On Saturday",
    events: [
      { title: "Cardiologist", time: "12:00 AM" },
      { title: "Neurologist", time: "2:00 PM" }
    ]
  }
];

function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      {scheduleData.map((group, index) => (
        <AppointmentGroup 
          key={index}
          day={group.day}
          events={group.events}
        />
      ))}
    </section>
  );
}

export default UpcomingSchedule;