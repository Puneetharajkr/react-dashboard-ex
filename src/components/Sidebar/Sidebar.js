import React from 'react';
import './Sidebar.css';
import { navItems } from '../../data/navigation';
import { 
  FiGrid, 
  FiClock, 
  FiCalendar, 
  FiBookmark, 
  FiBarChart2,
  FiSettings,
  FiMessageSquare,
  FiHelpCircle
} from 'react-icons/fi';
import { FaTeeth} from 'react-icons/fa';

function Sidebar() {
  const getIcon = (item) => {
    switch(item) {
      case 'Dashboard': return <FiGrid size={18} />;
      case 'History': return <FiClock size={18} />;
      case 'Calendar': return <FiCalendar size={18} />;
      case 'Appointments': return <FiBookmark size={18} />;
      case 'Statistics': return <FiBarChart2 size={18} />;
      case 'Tools': return <FaTeeth size={18} />;
      case 'Chat': return <FiMessageSquare size={18} />;
      case 'Support': return <FiHelpCircle size={18} />;
      case 'Setting': return <FiSettings size={18} />;
      default: return <FiGrid size={18} />;
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">General</h3>
        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={index === 0 ? 'active' : ''}>
                <span className="sidebar-icon">{getIcon(item)}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;