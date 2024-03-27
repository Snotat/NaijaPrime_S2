import React from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'

const FirstPage = ({
    handleFileDrop, 
    handleFileSelect, 
    fileProgress, 
    thrilerProgress, 
    file, 
    handleThrilerDrop, 
    handleThrilerSelect, 
    handleImageDrop, 
    handleImageSelect, 
    posterProgress, 
    thriler, 
    poster,
    nextPage
}) => {
  return (
    <div className='bg-[#010101] h-screen text-neutral-300 px-5'>
        <div className='flex justify-center p-5'>
            <p className='font-semibold text-2xl uppercase'>
                Prime Upload
            </p>
        </div>

        <div 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={handleFileDrop} 
            className=' border  border-dashed p-5 rounded-md  flex flex-col gap-5 items-center justify-center'>
            <div className=' flex items-center gap-3 text-xs'>
                <IoCloudUploadOutline />
                {file && file[0]?.name || <p>
                    Drag and drop your files here
                </p>}
            </div>

            <div className=''>
                <label htmlFor="browse" className=' bg-neutral-300 px-5 py-2 text-black text-sm'> Select Video</label>
                <input type="file" onChange={handleFileSelect} className=' hidden' id='browse' />
            </div>
        </div>
        {fileProgress && (
            <div className="h-1 mt-1 rounded-full overflow-hidden">
                <div className={` ${fileProgress < 100 ? 'bg-red-600' : 'bg-green-600'} h-full transition-all ease-in-out duration-500`} style={{width: `${fileProgress}%`}} />
            </div>
        )}


        <div 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={handleThrilerDrop} 
            className=' border p-4 rounded-md mt-5 flex flex-col gap-5 items-center justify-center'>
            <div className=' flex items-center gap-3 text-xs'>
                <IoCloudUploadOutline />
                {thriler && thriler[0]?.name || <p>
                    Drag and drop your thriler here
                </p>}
            </div>

            <div className=''>
                <label htmlFor="browseThriler" className=' bg-neutral-300 px-5 py-2 text-black text-sm'> Select Thriler</label>
                <input type="file" onChange={handleThrilerSelect} className=' hidden' id='browseThriler' />
            </div>
            
        </div>
        {thrilerProgress && (
            <div className="h-1 mt-1 rounded-full overflow-hidden">
                <div className={` ${thrilerProgress < 100 ? 'bg-red-600' : 'bg-green-600'} h-full transition-all ease-in-out duration-500`} style={{width: `${thrilerProgress}%`}} />
            </div>
        )}


        <div 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={handleImageDrop} 
            className=' border p-4 rounded-md mt-5 flex flex-col gap-5 items-center justify-center'>
            <div className=' flex items-center gap-3 text-xs'>
                <IoCloudUploadOutline />
                {poster && poster[0]?.name || <p>
                    Drag and drop your cover image here
                </p>}
            </div>

            <div className=''>
                <label htmlFor="browseImage" className=' bg-neutral-300 px-5 py-2 text-black text-sm'> Select Cover Image</label>
                <input type="file" onChange={handleImageSelect} className=' hidden' id='browseImage' />
            </div>
            
        </div>
        {posterProgress && (
            <div className="h-1 mt-1 rounded-full overflow-hidden">
                <div className={` ${posterProgress < 100 ? 'bg-red-600' : 'bg-green-600'} h-full transition-all ease-in-out duration-500`} style={{width: `${posterProgress}%`}} />
            </div>
        )}
        

        {/* upload form */}

        <div className=' mt-10'>
            <p onClick={nextPage} className=' bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                Next
            </p>
        </div>

        {/* <div className=' h-24'></div> */}
    </div>
  )
}

export default FirstPage