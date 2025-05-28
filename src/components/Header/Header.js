import React from 'react';
import './Header.css';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { FiBell as BellIcon } from 'react-icons/fi';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import userAvatar from '../../assets/images/user-avatar.png';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Healthcare.</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
        <SearchIcon className="icon" />
          <input type="text" placeholder="Type here to search" />
        </div>
        <div className="header-icons">
        <BellIcon className="icon" />
          <button className="add-button">
          <PlusIcon className="icon" />
          </button>
          <div className="user-profile">
            <img src={userAvatar} alt="User" />
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;