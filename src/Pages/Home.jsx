import React from 'react'
import Header from '../components/Header';
import List from '../components/List';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import'./home.css'
function Home() {
    const [moviedata , setMoviedata] = useState([]) ;
    const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
    const genres = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
     
      
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      }
    ]
    
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const searchURL = BASE_URL + '/search/movie?'+API_KEY;
  const fetchData = async () => {
    const response  =  await fetch(API_URL) ;
    const data = await response.json() ;
  setMoviedata(data.results)

   return data.results ;
    
  }
  
  
  const dataimp = useEffect(()=>{
    fetchData() ;
  })
  

  
  
  
    return (
      <>
      <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        moviedata.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <ion-icon name="star"></ion-icon>{" "}
                                        </span>
                                        <div className="list">Add to List</div>
                                       
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
     
    
      
        
      
      <List  data = {moviedata.slice(0,6)} />
      <List  data = {moviedata.slice(6,12)} />
      <List  data = {moviedata.slice(12,18)} />
      
  
  
  
   
        
      </>
    )
}

export default Home
