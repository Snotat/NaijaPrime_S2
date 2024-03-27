import { apiUrl } from '@/requestMethods';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from 'react-icons/io';
import "./featured.scss"
import axios from 'axios';

const Featured = ({type, setGenre}) => {
    const [content, setContent] = useState({});
    const [isHovered, setIsHovered] = useState(true);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const videoRef = useRef(null)

    const handleTimeUpdate =()=> {
      if (videoRef.current.currentTime >= 15) {
        videoRef.current.pause()
      }
    }

    useEffect(() => {
      const getRandomContent = async () => {
        try {
          const res = await axios.get(`${apiUrl}movies/random?type=${type}`, {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGYwODA0ZjZkNDFjMWQ1MGY2ODAwMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDkyNDg4NzEsImV4cCI6MTcxNzg4ODg3MX0.cvaDPR7zRmchPOneaPEn_mcIDcOnvOwuxjptBw1DGPg",
            },
          });
          setContent(res.data[0]);
        } catch (err) {
          console.log(err);
        }
      };
      getRandomContent();
    }, [type]);

    // console.log(content)

    
  return ( content &&
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre("")}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <video 
        src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} 
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        autoPlay />
      <div className="info">
        <Image src={content.imgTitle} alt="" width={500} height={500} />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <IoIosInformationCircle />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured