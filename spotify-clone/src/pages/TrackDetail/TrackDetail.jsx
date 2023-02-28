import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {TrackContainer} from './StyleTrackDetail'
import axios from 'axios'




function TrackDetail(props) {
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
      setTrackName(' ')
      setTrackArtist(' ')
      setTrackUrl(' ')
    })
  }


  const deleteTrack=(trackId)=>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${trackId}`,{
      headers:{
        Authorization:'helany-melo'
      }
        }).then((res)=>{
            alert("Playlist deletada com sucesso")
            getTrack()            
     
        })
    
  }

  


  return (
    <TrackContainer >
        
        <Link to='/playlist'>Voltar</Link>
        
        <h2>Adicione uma nova música na sua playlist {name}</h2>
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
              <button onClick={()=>deleteTrack(item.id)}>Deletar</button>
              </div>
              
            )
          })}
        </div>
    </TrackContainer>
  )
}

export default TrackDetail