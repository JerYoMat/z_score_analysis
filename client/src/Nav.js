import React from 'react';

const Nav = ({ activeTab, onTabChange }) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab===0 && 'selected'}`}><a onClick={() => onTabChange(0)}>Companies</a>
      </li>
      <li className={`App-nav-item ${activeTab===1 && 'selected'}`}><a onClick={() => onTabChange(1)}>Compare</a>
      </li>
    </ul>
  </nav>
)

export default Nav