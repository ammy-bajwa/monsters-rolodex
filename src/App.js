import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: [],
    searchField: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
    console.log("App ", this.props.children);
  }
  changeHandler = e =>
    this.setState({
      searchField: e.target.value
    });
  render() {
    const { monsters, searchField } = this.state;
    let filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Monsters"
          changeHandler={this.changeHandler}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
