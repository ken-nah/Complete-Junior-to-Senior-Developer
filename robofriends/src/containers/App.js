import React, { Component } from "react";
import CardList from "../components/card-list";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
      .catch(err => console.log(err.message));
  }

  onChangeHandler = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(
      (robot, i) =>
        robot.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onChangeHandler} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
