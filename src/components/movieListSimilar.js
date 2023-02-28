import React from "react";
import '../css/movieList.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetails from "./movieDetails";

export default class MovieListSimilar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        movie_id : props.match.params.movieid,
        MovieList: [] 
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/"+this.state.movie_id+"/similar?api_key=735f8435a422e8ffc3bf807a4f569435&language=en-US&page=1")
        .then(response => response.json())
        .then(json => {
            this.setState({
                MovieList: json.results,
                movie_id: this.props.match.params.movieid
            });
        });
}

componentDidUpdate(prevState){
  
    fetch("https://api.themoviedb.org/3/movie/"+this.state.movie_id+"/similar?api_key=735f8435a422e8ffc3bf807a4f569435&language=en-US&page=1")
        .then(response => response.json())
        .then(json => {
            this.setState({
                MovieList: json.results,
                movie_id: this.props.match.params.movieid
            });
        });
}

  render(){
  
    return(
      <div className="list">
      <h1 className="listTitle">Similar Movies</h1>
      <div className="row container" >
    <div className="row__inner">
      {this.state.MovieList.map((value, index)=>

    <Link key={value.id} to={'/movieDetails/'+value.id}> 
  
      <div key={value.id} className="tile">
          <div className="tile__media">
          <img  src ={'https://image.tmdb.org/t/p/w500/'+value.poster_path} className="image"/>
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




  
  
  

  









