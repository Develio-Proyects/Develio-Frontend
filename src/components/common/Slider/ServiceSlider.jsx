import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ServiceCard from '../ServiceCard/ServiceCard';
import { servicios } from '../../../listas/servicios';

const ServicesSlider = () => {
  return (
    <div className="services-slider">
        <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            centeredSlidesBounds={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                700: {
                slidesPerView: 2,
                spaceBetween: 30,
                },
                480: {
                slidesPerView: 1,
                spaceBetween: 30,
                },
            }}
        >
            {servicios.map(servicio => (
                <SwiperSlide key={servicio.id}>
                    <ServiceCard title={servicio.title} description={servicio.description} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default ServicesSlider;
