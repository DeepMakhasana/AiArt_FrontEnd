import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
const API = "https://aiarts.onrender.com";
// const API = "http://localhost:8000";



const Images = () => {
    const [images, setImages] = useState([]);
    const [Loadingplay, setLoadingplay] = useState(false);

    useEffect(() => {
        setLoadingplay(true);
        axios.get(`${API}/images`)
            .then((response) => { setImages(response.data) })
            .catch(err => alert(err));

        setTimeout(() => {
            setLoadingplay(false);
        }, 4000);
    }, [])

    return (
        <div  style={{ backgroundColor: "aliceblue", height: "auto", paddingBottom: "2.5rem" }}>
            {Loadingplay === true ? <Loading height="100vh" /> : 
            <div className='container'>
                <h1 className='h4 py-3'>All Images</h1>
                <div className="row g-4 pt-4">
                    {images.map((value) => {
                        return (
                            <div className='col-6 col-sm-6 col-md-4 col-lg-3' key={value._id}>
                                <img src={`${API}/upload/${value.imageFile}`} alt="" className="img-fluid" />
                                <p className='mt-1 mb-0' style={{ letterSpacing: "2px", fontWeight: "500" }}>{value.imageName.charAt(0).toUpperCase() + value.imageName.slice(1)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            } 
        </div>
    )
}

export default Images
