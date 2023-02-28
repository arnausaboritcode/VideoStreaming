import React from "react";
import '../css/searchBox.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      search: false
    }
    this.storeText = this.storeText.bind(this);
  }

  storeText(event) {

    this.setState({
      text: event.target.value,
      search: true
    });
    if (this.state.text == "") {
      this.setState({

        search: false
      });
    } else {
      this.setState({

        search: true
      });
    }
  }

  render() {
    return (
      <div class="divsearch">
        <form>
          <input type="text" class="textbox" placeholder="Search for a film" onChange={this.storeText} />
          {this.state.search ? <Link to={"/search/" + this.state.text}> <input type="button" value="search" /></Link> : <input type="button" value="search" />}
        </form>
      </div>
    )
  }
}