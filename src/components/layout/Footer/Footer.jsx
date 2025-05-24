import './footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
    return (
        <div className="footer-container">
            <footer>
                <div className="footer-logo">
                    <a href="#inicio">
                        <img src="/logo.png" alt="logo Develio" />
                    </a>
                </div>
                <div className="footer-section">
                    <h4>Secciones</h4>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#inicio" className="footer-link">Inicio</a></li>
                        <li className="footer-item"><a href="#servicios" className="footer-link">Servicios</a></li>
                        <li className="footer-item"><a href="#comoTrabajamos" className="footer-link">Cómo trabajamos</a></li>
                        <li className="footer-item"><a href="#queOfrecemos" className="footer-link">Que ofrecemos</a></li>
                        <li className="footer-item"><a href="#contacto" className="footer-link">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Servicios</h4>
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#servicios" className="footer-link">Desarrollo Web</a></li>
                        <li className="footer-item"><a href="#servicios" className="footer-link">Desarrollo de Software</a></li>
                        <li className="footer-item"><a href="#servicios" className="footer-link">Integración con IA</a></li>
                        <li className="footer-item"><a href="#servicios" className="footer-link">Mantenimiento Web</a></li>
                    </ul>
                </div>
                <div className="footer-redes">
                    {/* <div className="footer-red">
                        <InstagramIcon />
                        <a href="">@develio</a>
                    </div> */}
                    <div className="footer-red">
                        <MailOutlineIcon />
                        <a href="mailto:contacto@develio.dev">contacto@develio.email</a>
                    </div>
                </div>
                <p className='copytight'>Copryright © 2025 <span>Develio</span> - Desarrollo Web y Software</p>
            </footer>   
        </div>
    )
}

export default Footer