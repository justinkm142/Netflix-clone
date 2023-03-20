import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/Footer'

import { originals,trending,ComedyMovies,HorrorMovies,ActionMovies,Documentaries,RomanceMovies } from './url'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title='Netflix Original' url={originals}/>
       
        <RowPost title='Trending' isSmall={true} url={trending}/>
        <RowPost title='Comedy Movies' isSmall={true} url={ComedyMovies}/>
        <RowPost title='Horror Movies' isSmall={true} url={HorrorMovies}/>

        <RowPost title='Action Movies' isSmall={true} url={ActionMovies}/>
        <RowPost title=' Romance Movies' isSmall={true} url={RomanceMovies}/>
        <RowPost title='Documentaries' isSmall={true} url={Documentaries}/>
        <Footer />
    </div>
  );
}

export default App;

