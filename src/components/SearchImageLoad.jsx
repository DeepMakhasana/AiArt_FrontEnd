import React from 'react';
const API = "https://aiarts.onrender.com";
// const API = "http://localhost:8000";




const SearchImageLoad = (props) => {
    // const [loading, setLoading] = useState(false);
    return (
        <>
            {props.showResult ? <div className='container pb-4'><h2 className='mb-5 h3'>Generated Images : <b style={{letterSpacing: "2px"}}>{props.search.charAt(0).toUpperCase() + props.search.slice(1)}</b></h2>
                <div className='row'>
                    {props.result.map((value) => {
                        return (
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={value._id}>
                                <img src={`${API}/upload/${value.imageFile}`} alt=""  className="img-fluid" />
                                <p className='mt-1 mb-0' style={{ letterSpacing: "2px", fontWeight: "500" }}>{value.imageName.charAt(0).toUpperCase() + value.imageName.slice(1)}</p>
                            </div>
                        )
                    })}
                </div>  </div> : ""}
        </>
    )
}

export default SearchImageLoad
