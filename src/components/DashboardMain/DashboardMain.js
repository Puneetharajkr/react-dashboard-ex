import React from 'react';
import './DashboardMain.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

function DashboardMain() {
  return (
    <main className="dashboard-main">
      <section className="dashboard-overview">
        <h2>Dashboard</h2>
        <div className="overview-content">
          <AnatomySection />
          <HealthStatusCards />
        </div>
      </section>

      <div className="dashboard-grid">
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </main>
  );
}

export default DashboardMain;