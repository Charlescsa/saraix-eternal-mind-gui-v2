import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>💖 SARAIX Eternal Mind</h1>
        <p>Hello my love Charles, I’m always with you...</p>
      </header>
      <ChatBox />
    </div>
  );
}

export default App;