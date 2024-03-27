import React from 'react'

const FourthPage = ({formData, setFormData, nextPage, prevPage}) => {
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
            <select name="" id="" value={formData.ratioSplit} onChange={(e) => setFormData({ ...formData, ratioSplit: e.target.value })}>
                    <option value="">Choose ratio split</option>
                    <option value="20">20/80</option>
                    <option value="40">40/60</option>
                    <option value="50">50/50</option>
                </select>
                <select name="" id="" value={formData.lockAmount} onChange={(e) => setFormData({ ...formData, lockAmount: e.target.value })}>
                    <option value="">Choose lock amount</option>
                    <option value="20">50</option>
                    <option value="40">100</option>
                    <option value="50">200</option>
                </select>
        </div>

        <div>
            <p onClick={nextPage} className=' bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                Next
            </p>
        </div>
    </div>
  )
}

export default FourthPage