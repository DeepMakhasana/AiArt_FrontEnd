import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = "https://aiarts.onrender.com";
// const API = "http://localhost:8000";

const Upload = () => {
    const [imageName, setImageName] = useState('');
    const [imageUpload, setImageUpload] = useState('');
    const navigate = useNavigate();

    const imageNameChang = (e) => {
        setImageName(e.target.value)
    }

    const imageUploadChang = (e) => {
        setImageUpload(e.target.files[0])
    }

    const UploadImage = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imageName", imageName)
        formData.append("imageFile", imageUpload, imageUpload.name)

        axios.post(`${API}/admin/upload`, formData)
        .then(res => {alert(res.data.message)})
        .catch(err => {alert(err)})

        setImageName('');
        document.getElementById('imageFile').value = '';
    }
  return (
    <>
        <div id="uploadImages" className="container d-flex flex-column justify-content-center align-items-center" style={{width:"auto",height:"100vh",backgroundColor:"aliceblue"}} >
            <button className='btn btn-primary showUploadImages' onClick={() =>{navigate("/images")}}>Show Uploaded Images</button>
            <div className="upload-image-div d-flex flex-column justify-content-center gap-3">
                <h2 className="h2" style={{"letterSpacing":"2px"}}>Upload Images</h2>
                <form action="/upload" onSubmit={UploadImage} method="post" encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">Image Name</label>
                        <input type="text" name="imageName" id="imageName" onChange={imageNameChang} value={imageName} placeholder="Enter image name" className="p-2 form-control" style={{"letterSpacing":"2px"}} />
                    </div>  
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Upload image file</label>
                        <input className="form-control" type="file" onChange={imageUploadChang} name="imageFile" id="imageFile" accept="images/jpg, images/jpeg, images/png" />
                    </div>              
                    <input type="submit" className="btn btn-primary mt-1 px-5" />
                </form>
            </div>
        </div>

    </>
    
  )
}

export default Upload
