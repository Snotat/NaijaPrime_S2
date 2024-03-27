import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const FifthPage = ({nextPage, prevPage, handleFormSubmit}) => {

    const [isChecked, setIsChecked] = useState(false)
  return (
    <div className='bg-[#010101] h-screen text-neutral-300 p-5'>
        <div className='flex justify-center p-5'>
            <p className='font-semibold text-2xl uppercase'>
                Prime Upload
            </p>
        </div>
        <div className=' flex items-center justify-between'>
            <p onClick={prevPage} className='bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                Back
            </p>
        </div>
        <div  className=' mt-5 mb-10 flex flex-col gap-3 upload-form'>
            <div className=' flex items-center gap-4'>
                <div className=' '>
                    <div onClick={()=> setIsChecked(!isChecked)} className='border rounded-md w-7 h-7 flex items-center justify-center'>
                        {isChecked && <FaCheck />}
                    </div>
                </div>
                <p className=' text-sm text-neutral-400'>
                    By clicking upload, you confirm your movie is of high quality resolution, Pirate and Copyright Free, and also confirm you are the real owner of this content? Any illegal copyright infringement is likely to come with a penalty. 
                </p>
            </div>
        </div>

        <div>
            {isChecked &&<p onClick={handleFormSubmit} className=' bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                Upload
            </p>}
        </div>
    </div>
  )
}

export default FifthPage