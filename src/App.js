
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieListTheatres from './components/movieListTheatres';
import MovieDetails from './components/movieDetails';
import MovieListTopRated from './components/movieListTopRated';
import MovieListUpcoming from './components/movieListUpcoming';
import MovieListSimilar from './components/movieListSimilar';
import MovieListDiscover from './components/movieListDiscover';
import GenreList from './components/genreList';
import Footer from './components/footer';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import MovieSearch from './components/movieSearch';
import Welcome from './components/welcome_title';
import { useRef } from 'react';




function App() {

  return (
    <div>
   <Router>
    <div>
   <Navbar />
   <Route exact path="/" component={Welcome} />
   <Route exact path="/search/:text" component={MovieSearch} />
   <Route exact path="/genreList/:id" component={GenreList} />
   <Route exact path="/" component={MovieListUpcoming} /> 
   <Route exact path="/" component={MovieListTopRated} />
   <Route exact path="/" component={MovieListTheatres} />
   <Route  exact path="/" component={MovieListDiscover} />
     </div>
     <div>
    <br/><br/><br/><br/><br/>
    <Route exact path="/upComing" component={MovieListUpcoming} />
    <Route exact path="/topRated" component={MovieListTopRated} />
    <Route exact path="/theatres" component={MovieListTheatres} />
    <Route  exact path="/discover" component={MovieListDiscover} />
     </div>
    <Route exact path="/movieDetails/:movieid" component={MovieDetails} />
    <Route exact path="/movieDetails/:movieid" component={MovieListSimilar} />
    </Router>
    <Footer/>
    </div> 
  );
}

export default App;
