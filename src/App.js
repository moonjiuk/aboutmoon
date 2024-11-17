import './reset.css';
import './App.scss';
import { useEffect, useState } from 'react';

//components
import Nav from './components/Nav';
import MoonIntro from './components/MoonIntro';
import MoonTerrain from './components/MoonTerrain';
import MoonCard from './components/MoonCard';
import Moon3d from './components/Moon3D';
import Chatroom from './components/Chatroom';




function App() {
  // navigator
  const [activeNav, setActiveNav] = useState(0);
  const [showContents, setShowContents] = useState(0);

  //scroll position
  const handleFollow = () => {
    const section0 = document.querySelector('#section0');
    const section1 = document.querySelector('#section1');
    const section2 = document.querySelector('#section2');
    const section3 = document.querySelector('#section3');
    const section4 = document.querySelector('#section4');
  
    const section0OffsetBottom = section0 ? section0.offsetTop + section0.clientHeight : 0;
    const section1OffsetBottom = section1 ? section1.offsetTop + section1.clientHeight : 0;
    const section2OffsetBottom = section2 ? section2.offsetTop + section2.clientHeight : 0;
    const section3OffsetBottom = section3 ? section3.offsetTop + section3.clientHeight : 0;
    const section4OffsetBottom = section4 ? section4.offsetTop + section4.clientHeight : 0;
  
    if (window.scrollY < section0OffsetBottom) {
      setActiveNav(0);
      setShowContents(0);
    } else if (window.scrollY < section1OffsetBottom) {
      setActiveNav(1);
      setShowContents(1);
    } else if (window.scrollY < section2OffsetBottom) {
      setActiveNav(2);
      setShowContents(2);
    } else if (window.scrollY < section3OffsetBottom) {
      setActiveNav(3);
      setShowContents(3);
    } else if (window.scrollY < section4OffsetBottom) {
      setActiveNav(4);
      setShowContents(4);
    }
  };
  

  useEffect(()=>{
    window.addEventListener('scroll', handleFollow);
    return () => {
      window.removeEventListener('scroll', handleFollow);
    }
  });

  return (
    <div className="App">
      <Nav activeNav={activeNav} />

      <main>
          <MoonIntro showContents={showContents} />

          <div className='container'>
            <MoonTerrain showContents={showContents} />
            <MoonCard />
            <Moon3d />
            <Chatroom />
          </div>
      </main>

    </div>
  );
}



export default App;
