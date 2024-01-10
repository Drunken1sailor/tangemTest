import { useRef, useEffect, useState } from 'react';
import bannerTopImg from '../assets/bannerTopImg.png';
import dropdownBtnImg from '../assets/dropdownBtn.png'

const BannerTop = (props)=>{
    const bannerTopElement = useRef(null);
    const [isDropdownMenuActive, setIsDropdownMenuActive] = useState(false);

    const closeBannerTop = ()=>{
        props.closeBannerTop();
    }

    const handleBannerTopsBottom = (value)=>{
        props.handleBannerTopsBottom(value);
    }

    const toggleDropdownMenu = () => {
        setIsDropdownMenuActive(!isDropdownMenuActive);
    }

    useEffect(()=>{
        if(bannerTopElement.current){
            const {top, bottom} = bannerTopElement.current.getBoundingClientRect();
            handleBannerTopsBottom(bottom);
        }
    },[]);
    return(
        <>
        {props.isActiveBannerTop && 
        <div ref={bannerTopElement} className="bannerTop">
            <div className="bannerTop__wrapper">
                <div className="bannerTop__img">
                    <img src={bannerTopImg} alt="gift" />
                </div>
                <div className="bannerTop__content">
                    <div className="bannerTop__item"><span className='bold'>Black Friday</span><span className='hidden800'>, 24-27 Nov</span></div>
                    <div className="bannerTop__item bannerTop__discount highlight bold">10%OFF</div>
                    <div className="bannerTop__item hidden600">Use code <span className='highlight bold'>10FRIDAY</span> <span className='hidden800'>at checkout</span></div>
                    <div className={`dropdownBtn ${isDropdownMenuActive ? 'active': ''}`} onClick={toggleDropdownMenu}>
                        <img src={dropdownBtnImg} alt=">" />
                    </div>
                </div>
                <div className="bannerTopButtons hidden600">
                    <button className="bannerTop__shopBtn">Shop now</button>
                    <div className="bannerTop__closeBtn closeBtn hidden800" onClick={closeBannerTop}></div>
                </div>
            </div>
            <div className={`dropDownMenu ${isDropdownMenuActive ? 'active': ''}`} >
                <div>Use code <span className='highlight bold'>10FRIDAY</span></div> 
                <button className="bannerTop__shopBtn">Shop now</button>
            </div>
        </div>
        }
        </>
    );
}
export default BannerTop;
