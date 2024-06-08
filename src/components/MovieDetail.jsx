import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./MovieDetail.css";
import { useState, useEffect } from 'react';
import axios from "axios";

const MovieDetail = () => {
    let { movieId } = useParams();
  


    const [movieDetail,setMovieDetail] = useState([]);  

useEffect(()=>{
  fetchMovie();
},[])

async function fetchMovie(){
  try {
    const response = await  axios.get('http://localhost:9000/');
    let data;
    for(let i = 0; i < response.data.length; i++)
    {
        
        
        if(response.data[i].name === movieId)
        {
             data =  [
                response.data[i].name,
                response.data[i].image,
                response.data[i].details
             ];
          
        }
    }
    
    // console.log("Data ",data);

  setMovieDetail(data);
  
  } catch (error) {
    console.log("This is an Error due to : ",error);
  }    
}



const navigate = useNavigate();


  const handleMovie = () => {
     navigate(`/`)
     
  }

  return (
    <div className='detail-container'>
        <div className="detail-movie-name" style={{cursor:"pointer"}}>
          <p>{movieDetail[0]}</p>
          {/* <p>{movieDetail[1]}</p> */}
        </div>
        <div className="detail-content ">
            <div className="image " style={{cursor:"pointer"}} >
                <img src= {movieDetail[1]} alt="image is there" />
            </div>
            <div className="detail">
            
            {movieDetail[2]} 
            <button onClick={handleMovie} id="readmore-btn">Back See More</button>
            
            </div>
        </div>
     

    </div>

  )
}

export default MovieDetail