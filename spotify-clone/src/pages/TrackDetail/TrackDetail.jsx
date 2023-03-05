import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {TrackContainer, ContainerInfo} from './StyleTrackDetail'
import axios from 'axios'
import {toast} from "react-toastify"
import {FaTrash} from "react-icons/fa"
import {IoPlay} from "react-icons/io5"
import ReactPlayer from 'react-player/youtube'



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
      
    }).catch((err)=>{
     
    })
  }

  useEffect(()=>{
    getTrack()
  },[])

 

  const addTrackToPlaylist=()=>{      
    const api =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;    
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
      getTrack() 
      toast.success('Música adicionanda com sucesso!')
      
      setTrackName(' ')
      setTrackArtist(' ')
      setTrackUrl(' ')
      return
      
      

      
    }).catch((err)=>{      
      if(!trackName || !trackArtist || !trackUrl){
        toast.warn('Preencha todos os campos!')
        return   
      }else if(trackName === trackName){
        return
      }
      
     
    })   
  }



  const deleteTrack=(trackId)=>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${trackId}`,{
      headers:{
        Authorization:'helany-melo'
      }
        }).then((res)=>{
            toast.warn("Playlist deletada com sucesso")
            getTrack()            
     
        })
    
  }



  


  return (
    <TrackContainer>        
        <Link to='/playlist'>Voltar</Link>
        
        <h2>ADICIONE UMA MÚSICA À SUA PLAYLIST :)</h2>
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
          placeholder='URL DO YOUTUBE'
          value={trackUrl}
          onChange={(e)=>setTrackUrl(e.target.value)}
          /> 
        <button onClick={addTrackToPlaylist}>Cadastrar</button>       
        <div>
          {music.map((item)=>{
            return(
              <ContainerInfo key={item.id}>                             
                  <span> 
                                      
                    {item.name.toUpperCase()}
                    <ReactPlayer 
                      width='400px' 
                      height='50px' 
                      url={item.url} 
                      playing={false} 
                      controls={true}                      
                    />              
                  </span>
                  
                  <span><FaTrash onClick={()=>deleteTrack(item.id)}/> </span>  
                          
              </ContainerInfo>  
            )
          })}
        </div>
    </TrackContainer>
  )
}

export default TrackDetail