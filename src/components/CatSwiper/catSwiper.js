import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./catSwiper.scss";
import '../../../node_modules/swiper/swiper.scss';
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import CloseCatSwiper from '../CloseCatSwiper/CloseCatSwiper';


function CatSwiper(props) {


    const answers = props.secondArray;


    if (props.firstArray.length == 0) {

        return (

            <div className="no-cats-alert">
                Ups! Obecnie nie mamy kotów, które spełniałyby Twoje
                potrzeby! :( Jeśli chcesz, możesz wrócić później -
                lub zerknij poniżej na kandydatów najbliższych Twoim oczekiwaniom:
                <CloseCatSwiper
                    nonMatchingCats={props.nonMatchingCats} />


            </div >
        )
    }

    else {
        return (
            <div>
                <Swiper
                    pagination={{
                        type: "progressbar"
                    }}
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Pagination]}
                >

                    {props.firstArray.map((obj, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-content">
                                <div className="cat-swiper-name">{obj.name}</div>
                                <div className="cat-swiper-img"><img src={obj.img}></img></div>
                                <div className="cat-swiper-url"><a href={obj.url}>Zobacz!</a></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}

export default CatSwiper;