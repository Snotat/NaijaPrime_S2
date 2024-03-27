'use client'
import React from 'react'
import MovieList from './MovieList'
import { IoMdAdd } from 'react-icons/io'
import { useRouter } from 'next/navigation'

const Dashboard = () => {

    const router = useRouter()
  return (
    <div className=' bg-[#010101] h-full text-neutral-300 px-5'>
        <div onClick={()=> router.push('/creator/new')} className=' fixed bottom-5 right-5 bg-green-800 p-4 text-5xl rounded-full text-neutral-300 shadow-md'>
            <IoMdAdd />
        </div>
        <div  className=' flex justify-center p-5'>
            <p className=' font-semibold text-2xl uppercase'>
                Prime creator
            </p>
        </div>

        {/* creator analytics */}
        <p className=' font-semibold text-lg'>
            Creator analytics
        </p>
        <div className=' flex gap-2 mt-2'>
            <div className=' analytics-card'>
                <p className=' text-xs font-light'>
                    Views
                </p>
                <p className=' mt-1 text-sm font-semibold'>
                    205
                </p>
            </div>
            <div className=' analytics-card'>
                <p className=' text-xs font-light'>
                    Revenue
                </p>
                <p className=' mt-1 text-sm font-semibold'>
                    &#8358;28,000.00
                </p>
            </div>
        </div>

        {/*  */}
        <div className='mt-10'>
            <p className='font-semibold text-lg'>
                Recent published content
            </p>
            <div>
                <MovieList />
            </div>
        </div>
    </div>
  )
}

export default Dashboard