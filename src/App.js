import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import ServicesSection from './components/ServicesSection';
import SiderBar from './components/SiderBar';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const infoSectionData = [
    {
      id: "about",
      clas:"idImg",
      lightBg: true,
      lightText: false,
      lightDesc: false,
      topLine: "ABOUT ME",
      headLine: "Hi, I’m Hoai. Nice to meet you",
      desscription: "Since beginning my journey as a freelance developer nearly 5 years ago, I has been and working for FPT Software, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one develop problem at a time.",
      buttonLabel: "Learn More",
      imgStart: true,
      img: require('./images/154645667_4095634310488041_5413891824575376585_n.jpeg'),
      alt: "Car",
      dark: true,
      primary: true,
      darkText: true,
      learnMore:true
    },
    {
      id: "discover",
      lightBg: false,
      lightText: true,
      lightDesc: true,
      topLine: "Co-operate",
      headLine: "Interested in collaborating or investing?",
      desscription: "I’m always open to discussing product design work or partnership opportunities.",
      buttonLabel: "Start a conversation",
      imgStart: false,
      img: require('./images/undraw_web_developer_p3e5.svg'),
      alt: "Piggy",
      dark: false,
      primary: false,
      darkText: false,
      learnMore:false
    },
    {
      id: "signup",
      lightBg: true,
      lightText: false,
      lightDesc: false,
      topLine: "Join My Team",
      headLine: "Start a project",
      desscription: "Interested in working together? We should queue up a chat. I’ll buy the coffee.",
      buttonLabel: "Let's do this",
      imgStart: true,
      img: require('./images/undraw_Operating_system_re_iqsc.svg'),
      alt: "Paper",
      dark: true,
      primary: true,
      darkText: true,
      learnMore:false
    }
  ]
  return (
    <div className="App">
      <SiderBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection infoSectionData={infoSectionData} />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
