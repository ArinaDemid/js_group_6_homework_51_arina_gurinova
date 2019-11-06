import React, {Component} from 'react';
import './App.css';
import Card from './components/card';
import Logo from './components/logo';
import Navig from './components/nav';
import Footer from './components/footer';
import images from './components/images';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <div className="logo">
        <Logo logo={images.logo}/>
      </div>
      
      <div className="nav">
        <Navig li1='TOP-10 TV series' li2='TOP-10 movies' li3='TOP-10 cartoons'/>
      </div>
      
      <div className="content">
        <Card post={images.post1} name='Chernobyl' year='2019' description="In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one ..."/>
        <Card post={images.post2} name='Game of Thrones' year='2011' description="Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant ..."/>
        <Card post={images.post3} name='Peaky Blinders' year='2013' description="A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps ..."/>
        <Card post={images.post4} name='The Sopranos' year='1999' description="New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental ..."/>
        <Card post={images.post5} name='Sherlock' year='2010' description="A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London."/>
        <Card post={images.post6} name='True Detective' year='2014' description="Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both ..."/>
        <Card post={images.post7} name='Fargo' year='2014' description="Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back ..."/>
        <Card post={images.post8} name='Pride and Prejudice' year='1995' description="While the arrival of wealthy gentlemen sends her marriage-minded mother into a frenzy, willful and opinionated ..."/>
        <Card post={images.post9} name='Human Planet' year='2011' description="Like all life forms, humanity partially adapts to types of natural environment, yet also tends to change them. Each episode ..."/>
      </div>
      
      <div className="footerbott">
        <Footer link1={images.link1} link2={images.link2} link3={images.link3} link4={images.link4} link5={images.link5}/>
      </div>
      
      </div>
      );
    }
  }
  
  export default App;
  