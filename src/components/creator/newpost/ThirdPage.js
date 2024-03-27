import React from 'react'

const ThirdPage = ({formData, nextPage, setFormData, prevPage}) => {
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
            <input 
                    type="text" 
                    name="" 
                    id="" 
                    value={formData.year} 
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    placeholder='year' />
                <input 
                    type="number" 
                    name="" 
                    id="" 
                    value={formData.ageLimit} 
                    onChange={(e) => setFormData({ ...formData, ageLimit: e.target.value })}
                    placeholder='Age limit' />
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    value={formData.genre} 
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    placeholder='Genre' />
        </div>

        <div>
            <p onClick={nextPage} className=' bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                Next
            </p>
        </div>
    </div>
  )
}

export default ThirdPage