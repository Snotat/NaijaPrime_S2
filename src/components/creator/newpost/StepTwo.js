import React from 'react'

const StepTwo = ({show2, setShow2, formData, setFormData, progress, handleFormSubmit}) => {
  return (
    <div className={`${show2? 'flex': 'hidden'} h-screen bg-[#010101] p-5`}>
        <div className=' w-full flex flex-col justify-center'>
            <div className=' flex items-center justify-between'>
                <p onClick={()=> setShow2(false)} className='bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                    Back
                </p>
                <p className=' text-2xl'>
                    Step 2
                </p>
            </div>
            {/* <div className=' mt-3'>
                <p>{progress}% uploaded</p>
            </div> */}
            <div className=' mt-6 upload-form flex flex-col gap-3 w-full'>
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
                {/* <input type="number" name="" id="" placeholder='Price'/> */}
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
            <div className=' mt-4'>
                <p className=' text-[0.6rem] text-neutral-400'>
                    By clicking upload, you confirm your movie is of high quality resolution, Pirate and Copyright Free, and also confirm you are the real owner of this content? Any illegal copyright infringement is likely to come with a penalty. 
                </p>
            </div>
            <div  className=' mt-5'>
                <p onClick={handleFormSubmit} className=' bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                    Upload
                </p>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default StepTwo