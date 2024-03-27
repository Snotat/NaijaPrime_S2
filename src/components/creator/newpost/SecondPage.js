import React from 'react'

const SecondPage = ({formData, nextPage, setFormData, prevPage}) => {
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
                value={formData.title} 
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder='Title' />
            <input 
                type="text" 
                name="" 
                id="" 
                value={formData.producer} 
                onChange={(e) => setFormData({ ...formData, producer: e.target.value })}
                placeholder='Producer' />
            <input 
                type="text" 
                name="" 
                id=""
                value={formData.scriptWriter} 
                onChange={(e) => setFormData({ ...formData, scriptWriter: e.target.value })} 
                placeholder='Script wriiter' />
            <input 
                type="text" 
                name="" 
                id="" 
                value={formData.aboutMovie} 
                onChange={(e) => setFormData({ ...formData, aboutMovie: e.target.value })}
                placeholder='About movie' />
        </div>

        <div>
            <p onClick={nextPage} className=' bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                Next
            </p>
        </div>
    </div>
  )
}

export default SecondPage