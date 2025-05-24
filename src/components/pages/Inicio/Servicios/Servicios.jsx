import './servicios.scss'
import ServicesSlider from '../../../common/Slider/ServiceSlider'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const Servicios = () => {
  return (
    <section id='servicios' className="containerExpanded">
        <div className="container">
            <div className="services">
                <div className="service-title">
                    <h2 className='title'>Descubrí  nuestros servicios</h2>
                    <p className='text'>Servicios digitales innovadores para transformar tu presencia en línea.</p>
                </div>
                <div className="slider-buttons">
                    <div className="swiper-button-prev swiper-button"><ChevronLeftIcon /></div>
                    <div className="swiper-button-next swiper-button"><ChevronRightIcon /></div>
                </div>
                <ServicesSlider />
            </div>
        </div>
    </section>
  )
}

export default Servicios