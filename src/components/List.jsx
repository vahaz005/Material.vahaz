import React from 'react'
import ListItem from './ListItem'
import './list.css' 


function List({data}) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
 const array = data ;
  return (
    <>
    <div className='main'>
    <h2 className='title'>
   
</h2> 
    <div className='List'>
    {data.map((movie, index) => (
          <ListItem key={index} title={data[index].original_title} url = {IMG_URL + data[index].poster_path} overview ={data[0].overview}
          date = {data[index].release_date} rating ={data[index].vote_average} id ={data[index].id} />
        ))}
        
   




        
      
    </div>
    </div>
   
    </>
  )
}

export default List
