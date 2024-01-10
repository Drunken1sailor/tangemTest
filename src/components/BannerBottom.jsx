import { useState } from 'react';
import bannerBottomImg from '../assets/bannerBottomImg.png'

const BannerBottom = (props) => {
    const [animationOutClass, setAnimationClass] = useState('');

    const closeBannerBottom = ()=>{
        setAnimationClass('bannerBottom__animationOut');
        props.closeBannerBottom();
    }
    return(
        
        <div className={`bannerBottom ${props.isActiveBannerBottom ? 'bannerBottom__animationIn':''} ${animationOutClass}`}>
            <div className="bannerBottom__img">
                <img src={bannerBottomImg} alt="gift" />
            </div>
            <div className="bannerBottom__content">
                <h2 className="bannerBottom__title">Black Friday</h2>
                <div className="bannerBottom__discount">10%OFF</div>
                <div className="bannerBottom__promo">Use code <span className="highlight">10FRIDAY</span> at checkout</div>
                <button className="bannerBottom__shopBtn">Shop now through Monday</button>
            </div>
            <div className="bannerBottom__closeBtn closeBtn" onClick={closeBannerBottom}></div>
        </div>
        
    )
}
export default BannerBottom;