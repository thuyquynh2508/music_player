import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Favorites from './favorites'
import Feed from './feed'
import Trending from './trending'
import Player from './player'
import Library from './library'
import SideBar from '../components/sidebar'
import "../assets/screens/home.css"
export default function Home() {
  return (
    <Router>
        <div className='main-body'>
            <SideBar />
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/player" element={<Player />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
        
    </Router>
  )
}
