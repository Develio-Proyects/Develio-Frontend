import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './sliderQO.scss'
import 'swiper/css';
import 'swiper/css/pagination';

const SliderQO = ({slides, setActiveIndex}) => {
    
  return (
    <>
    <Swiper
            pagination={true} 
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true} 
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="swiper-wrapper"
        >
        {slides && slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
            </SwiperSlide>
        ))}
        </Swiper>
    
    </>
  )
}

export default SliderQO