import React from 'react';
import classes from './OrderAccepted.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-fade";
import image1 from "../../../assets/image/icon/orderAccepted1.jpg"
import image2 from "../../../assets/image/icon/orderAccepted2.jpg"
import image3 from "../../../assets/image/icon/orderAccepted3.jpg"
import image4 from "../../../assets/image/icon/orderAccepted4.jpg"
import { useSelector } from 'react-redux';

const OrderAccepted = () => {
    const imageList = [image1, image2, image3, image4]
    const deliveryTime = useSelector(state => state.deliveryTime)

    return (
        <div className={classes.container}>
            <Swiper className={classes.imageContainer}
                modules={[Autoplay, EffectFade]}
                effect='fade'
                fadeEffect={{
                    crossFade: true
                }}
                loop={true}
                allowTouchMove={false}
                speed={2000}
                autoplay={{
                    delay: 1000,
                    stopOnLastSlide: false
                }}
            >
                <div>
                    {imageList.map((image,index) => {
                        return (
                            <SwiperSlide key={index} className={classes.image}>
                                <img src={image} alt=''></img>
                            </SwiperSlide>
                        )
                    })
                    }
                </div>
            </Swiper>
            <div className={classes.textContainer}>
                <p className={classes.title}>Заказ принят</p>
                <p className={classes.text}>Ожидайте получения {deliveryTime.value === "fast" ? "в течение 30 минут" : `в ${deliveryTime.value}`}. Если курьер приедет позже, то вы получите скидку на заказ 50%</p>
            </div>
        </div >
    );
};

export default OrderAccepted;