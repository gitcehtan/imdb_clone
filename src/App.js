import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import axios from "axios";

function App() {

const [Movies,setMovies] = useState([]);  

useEffect(()=>{
  fetchData();
},[])

async function fetchData(){
  try {
    const response = await  axios.get('http://localhost:9000/');
    const data =  response.data;

  setMovies(data);


  } catch (error) {
    console.log("This is an Error due to : ",error);
  }    
}



// fetchData().then(data => {
// })

// console.log("Movies type ", Movies);

  
  return (
    <div className="App">
      <h1 style={{color:"white", backgroundColor:"black", padding:"5px"}} >IMDB Clone</h1>
      {
        
          
            Movies.map((M,index) => (
        
              <Movie key={index} name = {M.name} image = {M.image} details = {M.details} />
              ))
          
          
          
          
       
      
        
      }
     
    </div>
  );
}

export default App;
