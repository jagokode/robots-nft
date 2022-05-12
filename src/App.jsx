import { Component } from "react";
import { robots } from "./robot";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: "",
    };
  }

  onSearchText = (e) => {
    // console.log(e.target.value);
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f2">Robot NFT</h1>
        <SearchBox searchText={this.onSearchText} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
