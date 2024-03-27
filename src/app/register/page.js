'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import "./page.scss"
import { publicRequest } from '@/requestMethods'
import { useRouter } from 'next/navigation'

const Page = () => {


    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCreator, setIsCreator] = useState(false)
    const [error, setError] = useState(null)

    const router = useRouter()

    const data = {fullName, username, email, password, isCreator }

    const handleReg =async()=> {
        try {
            const res = await publicRequest.post("auth/register", data)
            if(res.status === 201) {
                router.push('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault;

        if(username && email && fullName && password) {
            handleReg()
        } else {
            setError("All fields are required")
        }
    }

    console.log(data)
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
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Fullname"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <select className='' onChange={(e)=> setIsCreator(e.target.value)}>
            <option defaultValue={"yes"} value="">Content Creator?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="loginButton text-center flex items-center justify-center" onClick={handleSubmit}>
            Sign Up
          </p>
          <span>
            Already have an account? <b>Login</b>
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