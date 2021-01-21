import React from 'react'
import { NikeShoesBrandLaunch } from './Components/ShoesDetails/Nike/NikeShoesBrandLaunch'
import { NikeShoeLaunch } from './Components/ShoesDetails/Nike/NikeShoeLaunch'
import { AdidasShoesBrandLaunch } from './Components/ShoesDetails/Adidas/AdidasShoesBrandLaunch'
import { AdidasShoeLaunch } from './Components/ShoesDetails/Adidas/AdidasShoeLaunch'
import { ChampionShoesBrandLaunch } from './Components/ShoesDetails/Champion/ChampionShoesBrandLaunch'
import { ChampionShoeLaunch } from './Components/ShoesDetails/Champion/ChampionShoeLaunch'
import { Home } from './Components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { JordanShoeLaunch } from './Components/ShoesDetails/Jordan/JordanShoeLaunch'
import { JordanShoesBrandLaunch } from './Components/ShoesDetails/Jordan/JordanShoesBrandLaunch'

function App() {
    return (
        <div>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/nike" element={<NikeShoesBrandLaunch />} />
            <Route path="/nike/:slug" element={<NikeShoeLaunch />} />
            <Route path="/adidas" element={<AdidasShoesBrandLaunch />} />
            <Route path="/adidas/:slug" element={<AdidasShoeLaunch />} />
            <Route path="/champion" element={<ChampionShoesBrandLaunch />} />
            <Route path="/champion/:slug" element={<ChampionShoeLaunch />} />
            <Route path="/jordan" element={<JordanShoesBrandLaunch />} />
            <Route path="/jordan/:slug" element={<JordanShoeLaunch />} />

        </Routes>
        </div>
    )
}

export default App;