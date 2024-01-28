import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../node_modules/swiper/swiper.scss';
import "./CloseCatSwiper.scss";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function CloseCatSwiper({ nonMatchingCats }) {


    return (

        <div className="close-cat-swiper">
            <Swiper
                modules={[Pagination, Scrollbar]}
                loop={true}
                grabCursor={true}
                slidesPerView={3}
                spaceBetween={50}
                centeredSlides={true}
                scrollbar={{ draggable: true }}
            >

                {nonMatchingCats.map((obj, index) => (
                    <SwiperSlide key={index}>
                        <div className="close-cat-content">
                            <div className="close-cat-swiper-name">{obj.name}</div>
                            <div className="close-cat-swiper-img"><img src={obj.img}></img></div>
                            <div className="close-cat-swiper-traits">
                                {obj.traits.map((trait, traitIndex) => (
                                    <div key={traitIndex}>{trait}</div>
                                ))}
                            </div>
                            <div className="close-cat-swiper-url"><a href={obj.url}>Zobacz!</a></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}

export default CloseCatSwiper;