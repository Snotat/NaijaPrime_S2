import React, { useRef, useState } from 'react'
import "./list.scss"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ListItem from '../listItem/ListItem';

const Latest = ({mov}) => {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

    const listRef = useRef();

    // console.log(list)

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 10 - clickLimit) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
  return (
    <div className="list">
      <span className="listTitle">{mov?.title}</span>
      <div className="wrapper">
        <IoIosArrowBack
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        {/* <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div> */}
        <IoIosArrowForward
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  )
}

export default Latest