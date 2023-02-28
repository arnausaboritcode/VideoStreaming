
import React from "react";
import '../css/movieList.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetails from "./movieDetails";

export default class MovieListUpcoming extends React.Component {
  constructor() {
    super();
    this.state = {
        MovieList: [] 
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=735f8435a422e8ffc3bf807a4f569435&language=en-US&page=3")
        .then(response => response.json())
        .then(json => {
            this.setState({
                MovieList: json.results
            });
        });
}

  render(){
  
    return(
      <div className="list">
        <hr/>
      <h1 className="listTitle">Upcoming</h1>
      <div className="row container" >
      <div className="row__inner">
      {this.state.MovieList.map((value, index)=>

    <Link key={value.id} to={'/movieDetails/'+value.id}> 

      <div key={value.id} className="tile">
          <div className="tile__media">
          <img src ={'https://image.tmdb.org/t/p/w500/'+value.poster_path} className="image"/>
      <div>
      </div>
      </div>
      <div className="tile__details">
      <div className="tile__title">
      <h2>{value.title}</h2>
      </div>
      </div>
      </div>
      </Link>
      )}
      </div>
      </div>
      </div>
    )
  }
 }




  
  
  

  









