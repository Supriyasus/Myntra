import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Navbar from './Navbar';


function App() {
  return (
    
    <div className="app">
    <Navbar/>

    <div className="app__body">
    <div className="sidebar">
    <Sidebar/>
    </div>
    <div className='feed'>
    <Feed/>
    </div>
    <Widgets/>
    
    </div>
    </div>
  );
}

export default App;
