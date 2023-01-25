import React from 'react';
import { useState } from 'react';
import animation_front from "./asset/Animation-front.png";
import animation from "./asset/Animation.gif";
import axios from 'axios';
import Loading from './Loading';
import SearchImageLoad from './SearchImageLoad';
// const API = "http://localhost:8000";
const API = "https://aiarts.onrender.com";


const Home = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [height, setHeight] = useState("100vh");
    const [loading, setLoading] = useState(false);


    const findImages = () => {
        setHeight("100vh");
        setLoading(true);
        axios.get(`${API}/image/${search}`)
            .then((Response) => { setResult(Response.data); setShowResult(false);})
            .catch(err => alert(err));
        setTimeout(() => {
            setLoading(false);
            setShowResult(true);
            setHeight("auto");
        }, 4000);

    }

    return (
        <div style={{ backgroundColor: "aliceblue", height: height }}>
            <div className="d-flex flex-column align-items-center">
                
                {loading ? <img src={animation} alt="Loading Animation" className="rounded my-4 front-animation" /> : <img src={animation_front} alt="Loading Animation" className="rounded my-4 front-animation"/>}
                <div className="search-div mt-3 text-center d-flex justify-content-center align-items-center">
                    <input type="text" name="generate" id="searchInput" onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Generate Images"className="form-control" />
                    <button id="findBTN" className="searchBtn ms-2 btn btn-primary" onClick={findImages} >Generate</button>
                </div>
            </div>
            {loading === true ? <Loading height="auto"/>:<SearchImageLoad search={search} result={result} showResult={showResult} loading={loading} /> }
        </div>
    )
}

export default Home
