import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const StoryView = () => {
  // const [list, setList] = useState(fakeData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [color, setColor] = useState(0);


  const stories = [
    { id: 1, img: img1, per : 0 },
    { id: 2, img: img2 , per : 0 },
    { id: 3, img: img3 , per : 0},
  ];

  const [list , setList] = useState(stories)
  


  
  // useEffect(() => {
  //   if (currentIndex !== list?.length) {
  //     var a = setInterval(() => {
  //       list[currentIndex].per += 100   
  //     }, 100) 
  //   } else {
  //     clearInterval(a)
  //   }
    
  // }, [currentIndex])


  // useEffect(() => {
  //   if (currentIndex !== list?.length) {
  //     var interval = setInterval(() => {
  //       setCurrentIndex((currentIndex + 1) % stories.length);
  //       }, 3000); // update every 3 seconds
  //   }
  //   else {
  //     clearInterval(interval)
  //   }

  // }, [currentIndex]);

  
  
  const next = () => {
    if (currentIndex <= list?.length) {
      setCurrentIndex(prev => prev + 1)
      list[currentIndex].per = 100
  } else {
    return false
    }
  }

  const prev = () => {
    if (currentIndex ===  0) {
      return false;
    } else {
      setCurrentIndex(prev => prev - 1)
      list[currentIndex - 1].per = 0
    }
  }

  return (
    <div>
      <div className="storyView">
        <div className="storyView_storyLength">
          {list?.map((res) => {
            return (
              <div className="storyView_dots">
                <ProgressBar res={res} />
              </div>
            );
          })}
        </div>

        <div className="storyView_text">
          {currentIndex === 0 ? "" : <button className="left" onClick={() => prev()}><i class="fa-solid fa-arrow-left"></i></button>}  
          

          { currentIndex === list?.length ? <h2>End Of Story</h2> : <img src={list?.[currentIndex]?.img} alt="No" />}  
          
         
         { currentIndex === list?.length ? "" : <button className="right" onClick={() => next() } ><i class="fa-solid fa-arrow-right"></i></button> } 
        </div>
      </div>
    </div>
  );
};

export default StoryView;
