'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import "./page.scss"


const Movie = () => {

    const searchPaams = useSearchParams()

    const vidLink = searchPaams.get("video")

    console.log(vidLink)

  return (
    <div className="watch">
      <Link href={"/"}>
        <div className="back">
          <FaLongArrowAltLeft />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={vidLink} />
    </div>
  )
}

export default Movie