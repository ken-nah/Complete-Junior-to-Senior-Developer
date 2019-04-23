import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import CardList from "../components/card-list";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {
      searchField,
      onSearchChange,
      robots
    } = this.props;

    const filteredRobots = robots.filter((robot, i) =>
      robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  errors: state.requestRobots.errors
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: event =>
    dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
