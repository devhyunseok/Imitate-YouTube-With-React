import React from 'react';
import './App.css';
import Profile from "./components/Profile";
import Headers from './components/Headers';

const App: React.FC = () => {
  return (
    <div className="App">
      <Headers />
      <Profile name={'현석'} job={'개발자'}/>
    </div>
  );
}

export default App;
