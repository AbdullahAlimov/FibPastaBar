import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import classes from './StocksSlider.module.scss'
import './style.scss'
import Modal from '../UI/Modal/Modal';
import StocksDetail from '../modalContent/StocksDetail/StocksDetail';

const StocksSlider = ({ items }) => {
  const [modalState, setModalState] = useState(false);
  const [modalValue, setModalValue] = useState("");
  return (
    <div>
      <Swiper className={classes.container}
        modules={[Navigation, EffectCoverflow, Autoplay]}
        slidesPerView={3}
        speed={1000}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false
        }}
        effect={window.innerWidth < 1150 ? "none" : "coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 2,
          slideShadows: false,
          scale: 0.9,
        }}
        navigation={{
          prevEl: `.${classes.prevButton}`,
          nextEl: `.${classes.nextButton}`
        }}
        breakpoints={{
          1150: {
            spaceBetween: 30
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }}
      >
        {
          items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="content">
                </div>
                <div className={classes.item} onClick={()=>{
                  setModalValue(item);
                  setModalState(true)
                }}>
                  <img src={`./image/${item.image}`} alt=''></img>
                </div>
              </SwiperSlide>
            )
          })
        }
        <div className={classes.prevButton}>{"❰"}</div>
        <div className={classes.nextButton}>{"❱"}</div>
      </Swiper>
      <Modal value={modalState} changeValue={setModalState}><StocksDetail item={modalValue}></StocksDetail></Modal>
    </div>
  );
};

export default StocksSlider