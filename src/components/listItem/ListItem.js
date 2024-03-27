import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa';
import { IoIosThumbsDown, IoIosThumbsUp, IoMdAdd } from 'react-icons/io';
import "./listItem.scss"
import { apiUrl } from '@/requestMethods';
import Link from 'next/link';
import { DotLoader } from 'react-spinners';


const ListItem = ({index, item}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
          try {
            const res = await axios.get(`${apiUrl}movies/find/${item}`, {
              headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGYwODA0ZjZkNDFjMWQ1MGY2ODAwMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDkyNDg4NzEsImV4cCI6MTcxNzg4ODg3MX0.cvaDPR7zRmchPOneaPEn_mcIDcOnvOwuxjptBw1DGPg",
              },
            });
            // console.log(res)
            setMovie(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMovie();
      }, [item]);

    //   console.log(movie)


  return ( movie &&
    <Link href={{ pathname: "/watch", query: movie}} >
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={movie?.img} alt="" width={100} height={100} />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <FaPlay className="icon" />
                <IoMdAdd className="icon" />
                <IoIosThumbsUp className="icon" />
                <IoIosThumbsDown className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
    ||
    <DotLoader color="#36d7b7" />
  )
}

export default ListItem