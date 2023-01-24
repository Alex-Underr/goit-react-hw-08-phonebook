import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import styles from './Home.module.css';
import { slides } from './slides';

export default function Home() {
  return (
    <>
      <h1 className={styles.header}>
        <p>Forgot?</p>
        <p style={{ color: '#42a5f5' }}>Remember!</p>
        <p style={{ color: '#bf6000' }}>Remembered?</p>
        <p style={{ color: '#00cb07' }}>Write down!</p>
      </h1>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className={styles.swiper}
      >
        {slides.map((slides, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img src={slides.url} alt={slides.alt} loading="lazy" />
            <p className={styles.caption}>{slides.caption}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
