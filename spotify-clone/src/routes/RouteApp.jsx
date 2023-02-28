import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Playlist from "../pages/Playlist/Playlist"
import TrackDetail from "../pages/TrackDetail/TrackDetail"


const api = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

function RouteApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/playlist' element={<Playlist/>}/>
            <Route path='/playlist/:id' element={<TrackDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteApp