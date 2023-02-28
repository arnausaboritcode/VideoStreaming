import React from "react";
import '../css/genres.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class SelectGenre extends React.Component {
  constructor() {
    super();
    this.state = {
      GenreList: [],
      genres: 0,
      search: false
    }
    this.takeValue = this.takeValue.bind(this);
  }

  componentDidUpdate() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=735f8435a422e8ffc3bf807a4f569435&language=en-US")
      .then(response => response.json())
      .then(json => {
        this.setState({
          GenreList: json.genres,
        });
      });
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=735f8435a422e8ffc3bf807a4f569435&language=en-US")
      .then(response => response.json())
      .then(json => {
        this.setState({
          GenreList: json.genres,
        });
      });
  }


  takeValue(event) {

    this.setState({
      genres: event.target.value,
    });
   
      this.setState({
        search: true,
      });
   
  }

  render() {
    return (
      <div class="divgeners">
        <select class="b1" onChange={this.takeValue}>
          <option hidden >Genres</option>

          {this.state.GenreList.map((value, idx) =>

            <option value={value.id}>{value.name}</option>
          )}
        </select>
        {this.state.search ? <Link to={"/genreList/" + this.state.genres}> <input class="b2" type="button" value="go" /></Link> : <input class="b2" type="button" value="go" />}
      </div>
    )
  }
}

