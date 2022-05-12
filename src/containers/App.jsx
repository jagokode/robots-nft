import { Component } from "react";
import { robots } from "../robot";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ robots: users });
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

    return !this.state.robots ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">Robot NFT</h1>
        <SearchBox searchText={this.onSearchText} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
