import React from 'react';
import './CalendarView.css';
import { calendarData } from '../../data/calendar';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h2>October 2021</h2>
      
      <table className="calendar-table">
        <thead>
          <tr>
            {calendarData.days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {calendarData.dates.map((date, index) => (
              <td key={index} className={!calendarData.times[index] ? 'empty' : ''}>
                <div className="date-number">{date}</div>
                {calendarData.times[index] && (
                  <div className="appointment-badge">{calendarData.times[index]}</div>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="upcoming-section">
        <h3>The Upcoming Schedule</h3>
        
        <div className="schedule-item">
          <h4>On Thursday</h4>
          <p>Health checking complete</p>
          <span>1:50 AM</span>
        </div>
        
        <div className="schedule-item">
          <h4>On Saturday</h4>
          <div className="appointment-card">
            <h5>Cardiologist</h5>
            <div className="appointment-times">
              <span>12:00 AM</span>
              <span>14:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;