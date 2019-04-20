import React, { Component } from "react";
import CardList from "./card-list";
import SearchBox from "./SearchBox";

import { robots } from "./robots";

class App extends Component {
  state = {
    searchField: ""
  };

  onChangeHandler = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = robots.filter((robot, i) =>
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
