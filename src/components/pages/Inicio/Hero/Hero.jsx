import './hero.scss'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import UseWindowResolution from '../../../../hooks/useWidthResolution';
import PrimaryButton from '../../../common/PrimaryButton/PrimaryButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SecundaryButton from '../../../common/SecundaryButton/SecundaryButton';

const Hero = () => {
    const resolution = UseWindowResolution();

  return (
    <section id="inicio">
        <div className="containerExpanded">
            <div className="container">
                <div className="hero-container">
                    <h2 className="hero-title">Desarrollo Digital para <span>Potenciar</span> tu Negocio</h2>
                    <div className="hero-buttons">
                        <PrimaryButton Icon={ChevronRightIcon} small={false}>
                            <a href="#contacto">Contactanos</a>
                        </PrimaryButton>
                        {/* <SecundaryButton>Agendá tu consulta</SecundaryButton> */}
                    </div>
                </div>
            </div>
        </div>
        {resolution < 1024 &&
            <div className="directional-arrow">
                <a href="#servicios">
                    <KeyboardDoubleArrowDownIcon />
                </a>
            </div>
        }
    </section>
  )
}

export default Hero