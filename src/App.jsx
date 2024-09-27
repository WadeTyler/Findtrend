import { useState, useEffect, createContext, useContext } from 'react'

import { Hero } from './components/Hero/Hero'
import { SubHero } from './components/SubHero/SubHero'
import { Features } from './components/Features/Features'
import { SubFeatures } from './components/SubFeatures/SubFeatures'
import { Plans } from './components/Plans/Plans'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'


export const MobileContext = createContext(false);


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);
  
 
    //choose the screen size 
    const handleResize = () => {
        setIsMobile(window.innerWidth < 720);
    }

    // create an event listener
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
        
    }, [])


  return (
    <MobileContext.Provider value={isMobile}>
      <div className="container">
        <Hero />
        <SubHero />
        <Features />
        <SubFeatures />
        <Plans />
        <Newsletter />
        <Footer />
      </div>
    </MobileContext.Provider>
  )
}

export default App
