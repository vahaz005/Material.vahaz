import React from 'react'
import List from '../components/List';
import { useParams } from "react-router-dom"
import Header from '../components/Header';
import { useState , useEffect} from 'react';
function TopRated() {
    const [Mdata , setdata] = useState([]) ;
    const {type} = useParams()

  
    const fetchData = async () => {
        const response  =  await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1cf50e6248dc270629e802686245c2c8`) ;
        const data = await response.json() ;
      setdata(data.results)
      console.log(data.results)
       return data.results ;
        
      }
      
      
      const dataimp = useEffect(()=>{
        fetchData() ;
      })
    
      
      
      
        return (
          <>
          
     
            
          
          <List  data = {Mdata.slice(0,6)} />
          <List  data = {Mdata.slice(6,12)} />
          <List  data = {Mdata.slice(12,18)} />
          
      
      
      
       
            
          </>
  )
}

export default TopRated
