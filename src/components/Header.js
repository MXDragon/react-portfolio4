import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
  

  return (
    <header className="header">
      <h1 className="nameplate">Bryan Bentz</h1>
      <Navigation {...props} />
    </header>
  ) 
}