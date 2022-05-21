import React from 'react';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Adress from './Component/Profile/Adress';
import Fullname from './Component/Profile/Fullname';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <Adress/>
      <Fullname/>
    </div>
  );
}

export default App;
