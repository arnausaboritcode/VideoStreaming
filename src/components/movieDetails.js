import React from "react";
import '../css/movieDetails.css';

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        movie_id : props.match.params.movieid,
        MovieDetails: [] ,
        genres: []
    }
  }

  componentDidMount() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* This scrolls the page to the top */
    });
    fetch("https://api.themoviedb.org/3/movie/"+this.state.movie_id+"?api_key=735f8435a422e8ffc3bf807a4f569435&language=en-US")
        .then(response => response.json())
        .then(json => {
            this.setState({
                MovieDetails: json,
                genres: json.genres,
                movie_id : this.props.match.params.movieid,
  
            });
        });
}

componentDidUpdate(prevProps) {
  if(this.props.location !== prevProps.location) window.scrollTo(0,0); /* This scrolls the page to the top */
  fetch("https://api.themoviedb.org/3/movie/"+this.state.movie_id+"?api_key=735f8435a422e8ffc3bf807a4f569435&language=en-US")
      .then(response => response.json())
      .then(json => {
          this.setState({
              MovieDetails: json,
              genres: json.genres,
              movie_id : this.props.match.params.movieid,

          });
      });
}

  render(){
    let value1 = this.state.MovieDetails;
    let value2 = this.state.genres;

    return(
  
      <div className="card">
        {console.log(value2[1])}
      <div className="card_left">
        <img src={'https://image.tmdb.org/t/p/w500/'+value1.poster_path}/>
      </div>
      <div className="card_right">
        <h1>{value1.title}</h1>
        <div className="card_right__details">
        <ul>
            <li>{value1.release_date}</li>
            <li>{value1.runtime} min</li>
         <li>  {value2.map((value)=>
          <span> {value.name}  &nbsp;</span> 
           )}</li>
           
          </ul>
          <ul><li><p>Rating:  <span className="rate"> <br/>{value1.vote_average}</span>  /10</p></li></ul>
          <div className="card_right__rating">
            <div className="card_right__rating__stars">
            
            </div>
          </div>
          <div className="card_right__review">
            <p>{value1.overview}</p>
           
          </div>
          <div className="card_right__button">
           <center> <a href={value1.homepage} target="_blank">FILM HOMEPAGE</a></center>
          </div>
        </div>
      </div>
    </div>
    )
  }
 }


  
