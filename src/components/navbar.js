
import React from "react";
import "../css/navbar.css";
import SearchBox from './searchBox';
import SelectGenre from "./genres";


export default function Navbar() {

    return (
      <div>
          <header>
      <div class="netflixLogo">
        <a id="logo" href="/"><img src="https://images-0.wuaki.tv/system/images/39/original/the-movie-database-1594119512.png" alt="Logo Image"></img></a>
        </div>      
      <nav class="main-nav">                
       <a href="/upComing">Upcoming</a>
        <a href="/topRated">Top Rated</a>
        <a href="/theatres">In theatres</a>
        <a href="/discover">Discover</a>    
      </nav>
      <nav class="sub-nav">
          <SearchBox /> 
            <SelectGenre/>
      </nav> 
    </header>
      </div>
    );
  }
