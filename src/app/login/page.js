'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import "./page.scss"
import { login } from '@/redux/apiCalls'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

const Page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = async(e)=> {
      e.preventDefault();
      try {
        const res = await login({email, password}, dispatch)
        console.log(res.data)
        if(res.status ===  200) {
          router.push('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Image
            className="logo"
            width={100}
            height={100}
            src="/assets/logo/logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleSubmit}>
            Sign In
          </button>
          <span>
            New to Naija Prime? <b>Sign up now.</b>
          </span>
          {/* <small>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not a
            bot. <b>Learn more</b>.
          </small> */}
        </form>
      </div>
    </div>
  )
}

export default Page