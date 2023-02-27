import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {TrackContainer} from './StyleTrackDetail'
import axios from 'axios'




function TrackDetail() {
  const [trackName, setTrackName]=useState('')
  const [trackArtist, setTrackArtist]=useState('')
  const [trackUrl, setTrackUrl]=useState('')
  const [music, setMusic]=useState([])
  


 const {id}=useParams()

 



  const getTrack = ()=>{
    const playlist=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = {
      headers:{
        Authorization:'helany-melo'
      }
    }    
    axios.get(playlist, headers).then((res)=>{
      console.log(res.data.result.tracks)
      setMusic(res.data.result.tracks)
      
    }) 
  }

  useEffect(()=>{
    getTrack()
  },[])

  const addTrackToPlaylist=()=>{    
    const api = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;

 
    const body ={
      name: trackName,
      artist: trackArtist,
      url: trackUrl
    }
    axios.post(api, body,{
      headers:{
        Authorization:'helany-melo'
      }
    }).then((res)=>{
      console.log(res.data)
      getTrack()
    })
  }

  


  return (
    <TrackContainer >
        <h2>Adicione uma nova música na sua playlist</h2>
        <input 
          placeholder='Nome da música'
          value={trackName}
          onChange={(e)=>setTrackName(e.target.value)}          
          />          
        <input 
          placeholder='Artísta'
          value={trackArtist}
          onChange={(e)=>setTrackArtist(e.target.value)}
          />
        <input 
          placeholder='URL'
          value={trackUrl}
          onChange={(e)=>setTrackUrl(e.target.value)}
          /> 
        <button onClick={addTrackToPlaylist}>Cadastrar</button>       
        <div>
          {music.map((item)=>{
            return(
              <div key={item.id}>
              
              <p>{item.name}</p>
              </div>
              
            )
          })}
        </div>
    </TrackContainer>
  )
}

export default TrackDetail