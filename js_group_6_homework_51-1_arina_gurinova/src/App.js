import React from 'react';
import './App.css';
import Card from './components/card';
// import Images from './components/images';
import pianistPost from './components/image/pianist.jpg';
import intouchablesPost from './components/image/intouchables.jpg';
import prestigePost from './components/image/prestige.jpg';

function App() {
  return (
    
    <div className="App">
      <Card post={pianistPost} name='The Pianist' year='2002'/>
      <Card post={intouchablesPost} name='Intouchables' year='2011' />
      <Card post={prestigePost} name='The Prestige' year='2006' />
    </div>
  );
}

export default App;
