import React, { useEffect, useState } from 'react'
import RecommendedSongsList from './RecomendedSongsList'

const Songs = ({id}) => {
    const [Songs, setSongs] = useState(null)
    const url = "http://localhost:4000/api/songs"


    const fetchInfo = () => { 
      return fetch(url) 
              .then((res) => res.json()) 
              .then((d) => setSongs(d)) 
      }
      
      useEffect(() => {
        fetchInfo();
      }, [id])

  return (
    <div className='songs'>
      <RecommendedSongsList user_ID={id} data={Songs} />
    </div>
  )
}

export default Songs
