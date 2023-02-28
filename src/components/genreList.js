import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class GenreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       id: props.match.params.id,
       MovieList:[],
    }
  }

  componentDidMount() {
    console.log("monta");
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=735f8435a422e8ffc3bf807a4f569435&with_genres=" + this.state.id)
        .then(response => response.json())
        .then(json => {
            this.setState({
                MovieList: json.results,
                id: this.props.match.params.id,
            }); 
        });
}

componentDidUpdate(prevState){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=735f8435a422e8ffc3bf807a4f569435&with_genres=" + this.state.id)
        .then(response => response.json())
        .then(json => {
            this.setState({
                MovieList: json.results,
                id: this.props.match.params.id,
            });
      });
}

  render(){

    return(
     <div>
        <br/> <br/> <br/> <br/>
      <h1> {this.state.text}</h1>
      <hr/>
      <div className="contain">
      <div className="row">
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
      </div> 
    )
  }
 }
 
