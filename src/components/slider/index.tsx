import { ReactElement, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { ISliderProps } from './types';
import { LeftArrowIcon, RightArrowIcon } from '../../assets/icons';

function Slider({ datesArr }: ISliderProps): ReactElement {
  const [, setInit] = useState<boolean>(false);

  return (
    <div className="slider">
      <Swiper
        slidesPerView="auto"
        breakpoints={{
          320: {
            spaceBetween: '25px',
            navigation: false,
          },
          1440: {
            spaceBetween: '80px',
            navigation: true,
          },
        }}
        // pagination={{
        //   type: 'bullets',
        //   bulletClass: 'swiper-custom-bullet',
        //   bulletActiveClass: 'swiper-custom-bullet-active',
        //   clickable: true,
        // }}
        className="mySwiper"
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        modules={[Pagination, Navigation]}
        onInit={() => setInit(true)}
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
      <button className="navigation prev">
        <LeftArrowIcon color="#3877EE" />
      </button>
      <button className="navigation next">
        <RightArrowIcon color="#3877EE" />
      </button>
    </div>
  );
}

export default Slider;
