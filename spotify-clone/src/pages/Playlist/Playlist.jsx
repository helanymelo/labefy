import axios from "axios"
import React, {useEffect, useState} from 'react'
import { ContainerInput, MusicName } from "./StylePlaylist";
import {FaTrash} from "react-icons/fa"
import { Link } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import TrackDetail from "../TrackDetail/TrackDetail";

function Playlist(props) {
  const[getPlaylist, setGetPlaylist]=useState([])
  const [load, setLoad]=useState(false)
  const [inputName, setInPutName]=useState('')
  





  const playlist="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const headers = {
      headers:{
        Authorization:'helany-melo'
      }
    }     
 
   

  const showPlaylist = () =>{
    axios.get(playlist, headers)
    .then((res)=>{
      console.log(res.data.result.list)
      setLoad(true)
      setGetPlaylist(res.data.result.list)
    }).catch((err)=>{
      console.log(err)
    })
  }

 useEffect(()=>{
  showPlaylist()
 },[])

  const deletePlaylist = (id)=>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
      headers:{
        Authorization:'helany-melo'
      }
        }).then((res)=>{
            alert("Playlist deletada com sucesso")
            showPlaylist()
                       
        }).catch((err)=>{
          console.log(err.message)
        })
    }

   

    function createPlaylist(){
      if(!inputName){
        alert('Digite o nome da sua playlist :)')
        return
      }
     
      const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
      const body = {
        name: inputName.toUpperCase()
      }
      axios.post(url, body,{
        headers:{
          Authorization:'helany-melo'
        }
      }).then((res)=>{        
          alert('Playlist Cadastrada com sucesso!')    
          showPlaylist()     
          setInPutName('')
         
        
        
      }).catch((err)=>{
         console.log("Erro")
         if(inputName === inputName){
          alert('Você já tem uma playlist com esse nome!')
          setInPutName('')
          return  
      
        }
      })

      
    } 

   
    useEffect(()=>{
      setLoad(true)
      setTimeout(()=>{
      setLoad(false)
      },2000)
    },[])
  

  


  return (
    <ContainerInput>
 
      <Link to="/">Voltar</Link>
      <h1>CRIAR PLAYLIST</h1>
      
      <input placeholder="Nome da Playlist" value={inputName} onChange={(e)=>setInPutName(e.  target.value)}/>
      <button onClick={()=>createPlaylist()}>CRIAR</button> 
     
      {getPlaylist.map((item)=>{          
          return(                                   
            <MusicName key={item.id}>              
              <span>{item.name}</span>
              <span><Link to={`/playlist/${item.id}`}>Ver Mais</Link></span>
              <FaTrash onClick={()=>deletePlaylist(item.id)}/>                            
            </MusicName>
          )          
        })}
          
       </ContainerInput>
  )
}

export default Playlist