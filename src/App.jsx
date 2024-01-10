import { useState, useEffect } from 'react';
import './App.css'
import BannerTop from './components/BannerTop';
import BannerBottom from './components/BannerBottom';

function App() {
  const [isActiveBannerTop, setIsActiveBannerTop] = useState(true);
  const [isActiveBannerBottom, setIsActiveBannerBottom] = useState(false);
  const [bannerTopsBottom, setBannerTopsBottom] = useState(0);

  const closeBannerTop = () => {
    setIsActiveBannerTop(false);
  }

  const handleBannerTopsBottom = (value) => {
    setBannerTopsBottom(value);
  }

  const closeBannerBottom = () => {
    localStorage.setItem('userClosedBanner',true);
    setIsActiveBannerBottom(false);
  }

  useEffect(()=>{
    const handleScroll = () => {
      const userClosedBanner = localStorage.getItem('userClosedBanner');
      if(window.scrollY > bannerTopsBottom && !userClosedBanner && bannerTopsBottom != 0){
        setIsActiveBannerBottom(true);
      }
    }
    window.addEventListener('scroll', handleScroll)
  },[bannerTopsBottom]);

  return (
    <div className='wrapper'>
      <BannerTop isActiveBannerTop={isActiveBannerTop} closeBannerTop={closeBannerTop} handleBannerTopsBottom={handleBannerTopsBottom}/>
      <BannerBottom isActiveBannerBottom={isActiveBannerBottom} closeBannerBottom={closeBannerBottom}/>
    </div>
  )
}

export default App;
