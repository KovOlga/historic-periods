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
        slidesPerView={1.1}
        breakpoints={{
          1024: {
            slidesPerView: 1,
          },
        }}
        spaceBetween="8px"
        centeredSlides
        pagination={{
          type: 'bullets',
          bulletClass: 'swiper-custom-bullet',
          bulletActiveClass: 'swiper-custom-bullet-active',
          clickable: true,
        }}
        className="mySwiper"
        modules={[Pagination]}
      >
        {datesArr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {/* <div className="relative box-border h-[328px] w-full md:h-[400px] lg:h-[496px] xl:h-[656px]">
                <Image
                  src={`https://${process.env.NEXT_PUBLIC_HOST_NAME}/uploads/${userType}/gallery/${userId}/${item}`}
                  alt={`Фото ${index + 1}`}
                  fill
                  className="rounded-[5px] object-cover"
                />
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
