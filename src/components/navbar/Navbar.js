'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import "./navbar.scss"
import { IoMdSearch, IoIosNotifications, IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    if (typeof window !== "undefined") {

      window.onscroll = () => {
          setIsScrolled(window.pageYOffset || window.scrollY === 0 ? false : true);
          return () => (window.onscroll = null);
        };
    }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Image
            src="/assets/logo/logo.png"
            alt=""
            width={100}
            height={100}
            className=' object-contain'
          />
          <Link href="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link href="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link href="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <IoMdSearch className="icon" />
          <span>KID</span>
          <IoIosNotifications className="icon" />
          <Image
            src="/assets/logo/logo.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="profile">
            <IoMdArrowDropdown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar