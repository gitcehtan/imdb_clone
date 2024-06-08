import React from 'react'
import "./Movie.css";
import { useNavigate } from 'react-router-dom';

const Movie = ({name, image, details}) => {

  const navigate = useNavigate();


  const handleMovie = () => {
     navigate(`/moviedetail/${name}`)
     
  }


  return ( 
   
    <div className='container'>
        <div className="movie-name" onClick={handleMovie} style={{cursor:"pointer"}}>
          <p>{name}</p>
        </div>
        <div className="content ">
          <div className="image " onClick={handleMovie} style={{cursor:"pointer"}} >
              <img src= {image} alt="image is there" />
          </div>
          <div className="details">
           
          {details} 
          
          <button onClick={handleMovie} id="readmore-btn">Read More</button>
          </div>
          
        </div>


    </div>
  )

 
}

export default Movie