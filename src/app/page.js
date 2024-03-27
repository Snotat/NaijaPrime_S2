'use client'
import Featured from "@/components/featured/Featured";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import "./page.scss"
import { useEffect, useState } from "react";
import axios from "axios";
import List from "@/components/list/List";
import { apiUrl, userRequest } from "@/requestMethods";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Latest from "@/components/latest/Latest";

export default function Home({type}) {

  const [lists, setLists] = useState([])
  const [latest, setLatest] = useState([])
  const [genre, setGenre] = useState(null)
  const router = useRouter()

  const user = useSelector(state => state.user.info)

  console.log(user)

  useEffect(()=> {

    // if (user?.isCreator) {
    //   router.push('/creator')
    // }
    const getRandomList = async () => {
      try {
        const res = await axios.get(`${apiUrl}lists${type ? "?type=" + type : ""}${
          genre? "&genre=" + genre : ""
        }`, {
          headers: {
            token: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGYwODA0ZjZkNDFjMWQ1MGY2ODAwMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDkyNDg4NzEsImV4cCI6MTcxNzg4ODg3MX0.cvaDPR7zRmchPOneaPEn_mcIDcOnvOwuxjptBw1DGPg"
          }
        })

        const movRes = await userRequest.get('movies')

        setLatest(movRes.data)

        // console.log(res)
        setLists(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getRandomList()
  }, [type, genre, router, user])

  console.log(latest)
  return (
    <div className="home">
      <Navbar /> 
      <Featured type={type} setGenre={setGenre} />
      {/* {
        latest.map((mov, i)=> (
          <Latest key={i} mov={mov} />
        ))
      } */}
      {
        lists.map((list, i)=> (
          <List key={i} list={list} />
        ))
      }
    </div>
  );
}
