import Image from 'next/image'
import React from 'react'
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineLike } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";

const MovieList = () => {

    const s = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className=' flex flex-col gap-5'>
        {
            s.map((item, i)=> (
                <div key={i} className=' bg-neutral-800 p-5 rounded-lg'>
                    <div className=' flex gap-3 border-b pb-4 border-neutral-500'>
                        <div className=' h-16 w-36  rounded-md overflow-hidden bg-slate-200'>
                            <Image src={'/assets/poster.jpg'} alt='' width={100} height={100} className=' w-full object-cover' />
                        </div>
                        <div>
                            <p className=' text-white'>
                                The elephant in the room
                            </p>
                            <p className=' text-xs text-neutral-500'>
                                Two brothers who live different lives try to live together.
                            </p>
                        </div>
                    </div>
                    <div className=' mt-3 flex gap-5 items-center text-neutral-400'>
                        <div className=' flex gap-2 items-center'>
                            <SiSimpleanalytics />
                            <p>
                                23
                            </p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <AiOutlineLike className=' text-lg' />
                            <p>
                                5
                            </p>
                        </div>
                        <div className=' flex gap-1 items-center'>
                            <TbCurrencyNaira className='text-2xl' />
                            <p>
                                7,000
                            </p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default MovieList