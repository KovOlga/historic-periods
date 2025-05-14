import { ReactElement } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { ISliderProps } from './types';

function Slider({ datesArr }: ISliderProps): ReactElement {
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        // breakpoints={{
        //   1024: {
        //     slidesPerView: 1,
        //   },
        // }}
        spaceBetween="80px"
        // pagination={{
        //   type: 'bullets',
        //   bulletClass: 'swiper-custom-bullet',
        //   bulletActiveClass: 'swiper-custom-bullet-active',
        //   clickable: true,
        // }}
        className="mySwiper"
        modules={[Pagination]}
      >
        {datesArr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slide">
                <p className="slide__date">{item.date}</p>
                <p className="slide__content">{item.content}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
