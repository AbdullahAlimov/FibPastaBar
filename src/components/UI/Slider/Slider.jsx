import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay,FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import classes from './Slider.module.scss'
import EmptyButton from '../button/EmptyButton/EmptyButton';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/cart.slice';

const Slider = ({ items, gap, title, titleSize }) => {
    const dispatch = useDispatch();
    return (
        <div className={classes.container}>
            <p className={classes.title} style={{ fontSize: titleSize }}>{title}</p>
            <Swiper className={classes.content}
                modules={[FreeMode, Navigation, EffectCoverflow, Autoplay]}
                spaceBetween={gap}
                speed={1000}
                autoplay={{
                    delay: 6000,
                    stopOnLastSlide: false
                }}
                navigation={{
                    prevEl: `.${classes.prevButton}`,
                    nextEl: `.${classes.nextButton}`
                }}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
            >
                <div>
                    {items.map((item) => {
                        return (
                            <SwiperSlide className={classes.slide} key={item.id} onClick={() => { dispatch(actions.addToCart(item)) }}>
                                <EmptyButton>
                                    <div className={classes.item}>
                                        <div className={classes.image}>
                                            <img src={`../../../../image/${item.image}`} alt={item.name} />
                                        </div>
                                        <p className={classes.name}>{item.name}</p>
                                        <p className={classes.price}>{item.price} ₽</p>
                                    </div>
                                </EmptyButton>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
            <div className={classes.prevButton}>{"❰"}</div>
            <div className={classes.nextButton}>{"❱"}</div>
        </div >
    );
};

export default Slider;