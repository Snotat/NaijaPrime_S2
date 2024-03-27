'use client'
import React, { useEffect, useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import app from '@/utils/firebase'
import DragNdrop from './DragNdrop'
import { IoCloudUploadOutline } from "react-icons/io5";
import StepTwo from './StepTwo'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'
import { userRequest } from '@/requestMethods'
import { data } from 'autoprefixer'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const NewPost = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const [file, setFile] = useState(null)
    const [fileProgress, setFileProgress] = useState(null)
    const [thriler, setThriler] = useState(null)
    const [thrilerProgress, setThrilerProgress] = useState(null)
    const [poster, setPoster] = useState(null)
    const [posterProgress, setPosterProgress] = useState(null)
    const [show2, setShow2] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        producer: '',
        scriptWriter: '',
        aboutMovie: '',
        coverImage: '',
        videoUrl: '',
        thrilerUrl: '',
        year: '',
        ageLimit: '',
        genre: '',
        ratioSplit: '',
        lockAmount: ''
    });
    const [uploadProgress, setUploadProgress] = useState(0);

    const user = useSelector(state => state.user.info)
    const router = useRouter()

    // console.log(user)

    const nextPage =()=> {
        setCurrentPage(currentPage + 1)
    }

    const prevPage =()=> {
        setCurrentPage(currentPage -1)
    }

    useEffect(() => {
        if (file) handleUploadVideo();
    }, [file]);

    useEffect(() => {
        if (thriler) handleUploadThriler();
    }, [thriler]);

    useEffect(() => {
        if (poster) handleUploadPoster();
    }, [poster]);

    console.log(formData)


    const handleFormSubmit = async () => {

        // Validate form data
        if (!formData.title || !formData.producer || !formData.scriptWriter || !formData.aboutMovie || !formData.coverImage || !formData.year || !formData.ageLimit || !formData.genre || !formData.ratioSplit || !formData.lockAmount) {
            alert('Please fill in all fields');
            return;
        }

        // Perform upload with progress tracking
        const formDataToUpload = new FormData();
        formDataToUpload.append('title', formData.title);
        formDataToUpload.append('producer', formData.producer);
        formDataToUpload.append('scriptWriter', formData.scriptWriter);
        formDataToUpload.append('aboutMovie', formData.aboutMovie);
        formDataToUpload.append('coverImage', formData.coverImage);
        formDataToUpload.append('year', formData.year);
        formDataToUpload.append('ageLimit', formData.ageLimit);
        formDataToUpload.append('genre', formData.genre);
        formDataToUpload.append('ratioSplit', formData.ratioSplit);
        formDataToUpload.append('lockAmount', formData.lockAmount);

        const response = await userRequest.post('movies', {
            title: formData.title,
            producer: formData.producer,
            scriptWriter: formData.scriptWriter,
            desc: formData.aboutMovie,
            img: formData.coverImage,
            trailer: formData.thrilerUrl,
            video: formData.videoUrl,
            year: formData.year,
            limit: formData.ageLimit,
            genre: formData.genre,
            price: formData.lockAmount,
            ratioSplit: formData.ratioSplit,
            userId: user?._id
        });

        console.log(response)

        // if (response.ok) {
        //     router.push('/creator')
        //     alert('Upload successful');
        // } else {
        //     alert('Upload failed');
        // }
    };

    // onUploadProgress: (progressEvent) => {
    //     const progressPercent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
    //     setUploadProgress(progressPercent);
    // }


    const handleFileDrop = (e) => {
        e.preventDefault();
        // const droppedFiles = Array.from(e.dataTransfer.files?.[0]);
        // setFile(droppedFiles);
        setFile(e.target.files?.[0]);
    };

    const handleFileSelect = (e) => {
        // const selectedFiles = Array.from(e.target.files?.[0]);
        setFile(e.target.files?.[0]);
    };

    const handlethrilerDrop = (e) => {
        e.preventDefault();
        // const droppedFiles = Array.from(e.dataTransfer.files?.[0]);
        // setFile(droppedFiles);
        setThriler(e.target.files?.[0]);
    };

    const handleThrilerSelect = (e) => {
        // const selectedFiles = Array.from(e.target.files?.[0]);
        setThriler(e.target.files?.[0]);
    };

    const handleImageDrop = (e) => {
        e.preventDefault();
        // const droppedFiles = Array.from(e.dataTransfer.files?.[0]);
        // setFile(droppedFiles);
        setPoster(e.target.files?.[0]);
    };

    const handleImageSelect = (e) => {
        // const selectedFiles = Array.from(e.target.files?.[0]);
        setPoster(e.target.files?.[0]);
    };

    // console.log(thriler)

    const handleUploadVideo =()=> {
        if (!file) {
            console.error('No file selected for upload');
            return;
        }
        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                setFileProgress(progress)
                switch (snapshot.state) {
                case 'paused':
                    // console.log('Upload is paused');
                    break;
                case 'running':
                    // console.log('Upload is running');
                    break;
                    default:
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log(downloadURL)
                    setFormData({...formData, videoUrl: downloadURL})
                });
            }
        );
    }

    const handleUploadThriler =()=> {
        const fileName = new Date().getTime() + thriler?.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, thriler)

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                setThrilerProgress(progress)
                switch (snapshot.state) {
                case 'paused':
                    // console.log('Upload is paused');
                    break;
                case 'running':
                    // console.log('Upload is running');
                    break;
                    default:
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log(downloadURL)
                    setFormData({...formData, thrilerUrl: downloadURL})
                });
            }
        );
    }

    const handleUploadPoster =()=> {
        const fileName = new Date().getTime() + poster?.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, poster)

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                setPosterProgress(progress)
                switch (snapshot.state) {
                case 'paused':
                    // console.log('Upload is paused');
                    break;
                case 'running':
                    // console.log('Upload is running');
                    break;
                    default:
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log(downloadURL)
                    setFormData({...formData, coverImage: downloadURL})
                });
            }
        );
    }

    return (
        <div className='bg-[#010101] h-screen text-neutral-300 px-5'>
            {currentPage === 1 && (
                <FirstPage
                    formData={formData}
                    handleFileDrop={handleFileDrop}
                    handleFileSelect={handleFileSelect}
                    handleImageDrop={handleImageDrop}
                    handleImageSelect={handleImageSelect}
                    handleThrilerDrop={handlethrilerDrop}
                    handleThrilerSelect={handleThrilerSelect}
                    posterProgress={posterProgress}
                    file={file}
                    thriler={thriler}
                    fileProgress={fileProgress}
                    thrilerProgress={thrilerProgress}
                    setFormData={setFormData}
                    nextPage={nextPage}
                    poster={poster}
                />
            )}
            {currentPage === 2 && (
                <SecondPage
                    formData={formData}
                    setFormData={setFormData}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            )}
            {currentPage === 3 && (
                <ThirdPage
                    formData={formData}
                    setFormData={setFormData}
                    handleFormSubmit={handleFormSubmit}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            )}
            {currentPage === 4 && (
                <FourthPage
                    formData={formData}
                    setFormData={setFormData}
                    handleFormSubmit={handleFormSubmit}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            )}
            {currentPage === 5 && (
                <FifthPage
                    formData={formData}
                    setFormData={setFormData}
                    handleFormSubmit={handleFormSubmit}
                    prevPage={prevPage}
                />
            )}
        </div>
    );




  return (
    <div className='bg-[#010101] h-screen text-neutral-300 px-5'>
        <div className=' fixed top-0 left-0 w-full'>
            <StepTwo 
                show2={show2} 
                setShow2={setShow2} 
                formData={formData} 
                setFormData={setFormData} 
                handleFormSubmit={handleFormSubmit}
                // progress={progress} 
            />
        </div>
        <div className='flex justify-center p-5'>
            <p className='font-semibold text-2xl uppercase'>
                Prime Upload
            </p>
        </div>

        <div 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={handleDrop} 
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
            onDrop={handleDrop} 
            className=' border p-4 rounded-md mt-5 flex flex-col gap-5 items-center justify-center'>
            <div className=' flex items-center gap-3 text-xs'>
                <IoCloudUploadOutline />
                {file && file[0]?.name || <p>
                    Drag and drop your thriler here
                </p>}
            </div>

            <div className=''>
                <label htmlFor="browse" className=' bg-neutral-300 px-5 py-2 text-black text-sm'> Select Thriler</label>
                <input type="file" onChange={handleFileSelect} className=' hidden' id='browse' />
            </div>
            
        </div>
        {thrilerProgress && (
            <div className="h-1 mt-1 rounded-full overflow-hidden">
                <div className={` ${thrilerProgress < 100 ? 'bg-red-600' : 'bg-green-600'} h-full transition-all ease-in-out duration-500`} style={{width: `${thrilerProgress}%`}} />
            </div>
        )}
        

        {/* upload form */}
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
            <label htmlFor="poster">Choose cover image</label>
            <input type="file" name="poster" id="poster" onChange={(e)=> setPoster(e.target.files?.[0] || null)} className='hidden' />
        </div>

        <div>
            <p onClick={()=> setShow2(true)} className=' bg-neutral-300 rounded-md text-neutral-700 p-4 font-bold uppercase flex items-center justify-center'>
                Next
            </p>
        </div>

        {/* <div className=' h-24'></div> */}
    </div>
  )
}


export default NewPost