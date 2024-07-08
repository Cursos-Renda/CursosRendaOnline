import React from 'react';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { SliderItem } from './sliderItem';

export const SliderSection = () => {
    const item: any = []
    for (let i = 0; i < 10; i++) {
        item.push(                <SwiperSlide className={styles.sliderSection__slider__item}>
            <SliderItem 
                checkout='https://go.hotmart.com/X85101745E?ap=f19c'
                img='https://static-media.hotmart.com/1FOJwIowQ-2xF-RuOaO2Ll_VaOM=/295x165/smart/filters:quality(100)/hotmart/product_pictures/4a65432c-f62c-4a49-8df7-da2ec8d056e3/photo_20211005_160345.jpg'
                site='https://go.hotmart.com/X85101745E?ap=14f2'
                title='2 em 1 - Microblading + Shadow'
                value='R$100,00'
                key={1}
            />
        </SwiperSlide>);
      }
    return (
        <section className={styles.sliderSection}>
            <Swiper
                className={styles.sliderSection__slider}
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop = {true}
            >
                { item }
            </Swiper>
        </section>
    )
}