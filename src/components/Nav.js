import { useRef } from "react";
import moonNav from '../img/moon-nav.png';

function Nav(props) {
    //scroll to
    function scrollTo(e) {
        const activeSection = document.querySelector("#section" + e);
        const location = activeSection.offsetTop;
        
        if (e == 0) {
        window.scrollTo({top:location, behavior:'smooth'});
        } else if (e == 1) {
        const activeSection = document.querySelector('#section1 > img');
        const location = activeSection.offsetTop;
        window.scrollTo({top:location + activeSection.clientHeight/2 - window.innerHeight/2 , behavior:'smooth'});
        } else if (e == 2) {
        window.scrollTo({top:location + activeSection.clientHeight/2 - window.innerHeight/2 , behavior:'smooth'});
        } else if (e == 3) {
        window.scrollTo({top:location + activeSection.clientHeight/2 - window.innerHeight/2 , behavior:'smooth'});
        } else if (e == 4) {
            window.scrollTo({top:location + activeSection.clientHeight/2 - window.innerHeight/2 , behavior:'smooth'});
        }
        
    }

    return (
        <nav>
            <ul>
                <li className={props.activeNav == 0 ? 'active' : null} onClick={() => scrollTo(0)}>
                    <a>
                        <div className='nav-filter'></div>
                        <img src={moonNav} alt="Moon Navigation" />;
                        <em>Introduction</em>
                    </a>
                </li>
                <li className={props.activeNav == 1 ? 'active' : null} onClick={()=>scrollTo(1)}>
                    <a>
                        <div className='nav-filter'></div>
                        <img src={moonNav} alt="Moon Navigation" />;
                        <em>Geology</em>
                    </a>
                </li>
                <li className={props.activeNav == 2 ? 'active' : null} onClick={()=>scrollTo(2)}>
                    <a>
                        <div className='nav-filter'></div>
                        <img src={moonNav} alt="Moon Navigation" />;
                        <em>Moon Card</em>
                    </a>
                </li>
                <li className={props.activeNav == 3 ? 'active' : null} onClick={()=>scrollTo(3)}>
                    <a>
                        <div className='nav-filter'></div>
                        <img src={moonNav} alt="Moon Navigation" />;
                        <em>3D Moon</em>
                    </a>
                </li>
                <li className={props.activeNav == 4 ? 'active' : null} onClick={()=>scrollTo(4)}>
                    <a>
                        <div className='nav-filter'></div>
                        <img src={moonNav} alt="Moon Navigation" />;
                        <em>Community</em>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;