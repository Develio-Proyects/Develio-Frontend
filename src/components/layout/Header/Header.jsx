import { useEffect, useState } from 'react'
import './header.scss'
import UseWindowResolution from '../../../hooks/useWidthResolution'
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton'

const Header = () => {
    const [menuWidgetOpen, setMenuWidgetOpen] = useState(false)
    const [scrolling, setScrolling] = useState(false);
    const resolution = UseWindowResolution()

    const handleWidget = () => { 
        setMenuWidgetOpen(!menuWidgetOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <div className={`header-container ${scrolling ? "bg-filled" : "bg-transparent"}`}>
            <header className='header'>
                <div className="logo-container">
                    <a href="#inicio">
                        <img src="/logo.png" alt="logo Develio" />
                        {/* <h1>Develio</h1> */}
                    </a>
                </div>
                {resolution < 1024 && 
                    <div className="menu-icon" onClick={handleWidget}>
                        <span className={menuWidgetOpen ? "line line1 activeLine1" : "line line1"}></span>
                        <span className={menuWidgetOpen ? "line line2 activeLine2" : "line line2"}></span>
                    </div>
                }
                <nav className={menuWidgetOpen ? "nav-open nav" : "nav"}>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#inicio" onClick={handleWidget} className="nav-link">Inicio</a></li>
                        <li className="nav-item"><a href="#servicios" onClick={handleWidget} className="nav-link">Servicios</a></li>
                        <li className="nav-item"><a href="#comoTrabajamos" onClick={handleWidget} className="nav-link">Cómo trabajamos</a></li>
                        <li className="nav-item"><a href="#queOfrecemos" onClick={handleWidget} className="nav-link">Qué ofrecemos</a></li>
                    </ul>
                </nav>
                {resolution > 1024 && 
                    <PrimaryButton small={true} link={"#contacto"}>Contactanos</PrimaryButton>
                }
            </header>
        </div>
    );
};

export default Header;
