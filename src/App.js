import React from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMain from './components/DashboardMain/DashboardMain';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DashboardMain />
      </div>
    </div>
  );
}

export default App;