import React from 'react';
import './App.css';
import Card from './components/card';
import Logo from './components/logo';
import Navig from './components/nav';
import Footer from './components/footer';
import logoimg from './components/image/logo.png';
import post1 from './components/image/chernobyl.jpg';
import post2 from './components/image/got.jpg';
import post3 from './components/image/blinders.jpg';
import post4 from './components/image/sopranos.jpg';
import post5 from './components/image/sherlock.jpg';
import post6 from './components/image/detective.jpg';
import post7 from './components/image/fargo.jpg';
import post8 from './components/image/pride.jpg';
import post9 from './components/image/human.jpg';
import link1 from './components/image/a-icon.png';
import link2 from './components/image/facebook-icon.png';
import link3 from './components/image/google-icon.png';
import link4 from './components/image/icon-slack.png';
import link5 from './components/image/spotify-icon.png';

function App() {
  return (
    <div className="App">

      <div className="logo">
        <Logo logo={logoimg}/>
      </div>

      <div className="nav">
        <Navig li1='TOP-10 TV series' li2='TOP-10 movies' li3='TOP-10 cartoons'/>
      </div>

      <div className="content">
        <Card post={post1} name='Chernobyl' year='2019' description="In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes."/>
        <Card post={post2} name='Game of Thrones' year='2011' description="Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years."/>
        <Card post={post3} name='Peaky Blinders' year='2013' description="A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby."/>
        <Card post={post4} name='The Sopranos' year='1999' description="New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling."/>
        <Card post={post5} name='Sherlock' year='2010' description="A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London."/>
        <Card post={post6} name='True Detective' year='2014' description="Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law."/>
        <Card post={post7} name='Fargo' year='2014' description="Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota."/>
        <Card post={post8} name='Pride and Prejudice' year='1995' description="While the arrival of wealthy gentlemen sends her marriage-minded mother into a frenzy, willful and opinionated Elizabeth Bennet matches wits with haughty Mr. Darcy."/>
        <Card post={post9} name='Human Planet' year='2011' description="Like all life forms, humanity partially adapts to types of natural environment, yet also tends to change them. Each episode examines how life differs for men and nature in some type of .."/>
      </div>

      <div className="footerbott">
      <Footer link1={link1} link2={link2} link3={link3} link4={link4} link5={link5}/>
      </div>
      
    </div>
  );
}

export default App;
