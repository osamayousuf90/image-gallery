import React, { useRef } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper";

const StoryView = () => {
  // const [list, setList] = useState(fakeData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const storyRef = useRef();
  var stoptimer;
  const [select, setSelect] = useState(0);

  const stories = [
    { id: 1, img: img1, dur: 3000, active: false },
    { id: 2, img: img2, dur: 3000 , active: false},
    { id: 3, img: img3, dur: 3000 , active: false},
    { id: 4, img: img3, dur: 3000 , active: false},
    { id: 5, img: img3, dur: 3000 , active: false},
    { id: 6, img: img3, dur: 3000 , active: false},
  ];

  const [list] = useState(stories);
  const [smallImg, setSmallImg] = useState(false);

  const next = () => {
    if (select !== list?.length) {
      setSelect((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (select !== 0) {
      setSelect((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="storyView">
        <div className="storyView_storyLength">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
            className="mySwiper">
          {list?.map((res , index) => {
            return (
              <SwiperSlide> <div className="storyView_child"> <img id={select} style={{ border : select === index && "1px solid white" }} onClick={() => setSelect(index) } src={ res?.img } alt="" /> </div></SwiperSlide>            
            )    
          })}
      </Swiper>
        </div>

        <div className="storyView_text">
          {select === 0 ? (
            ""
          ) : (
            <button className="left" onClick={() => prev()}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          )}

          {select === list?.length ? (
            <h2>End Of Story</h2>
          ) : (
            <img
              ref={storyRef}
              src={ select ? list?.[select]?.img : list?.[0]?.img }
              alt="No"
            />
          )}

          {select >= list?.length - 1 ? (
            ""
          ) : (
            <button className="right" onClick={() => next()}>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryView;
