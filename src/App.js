import React from "react";
import { CardList } from "./components/card-list/card-list.component";
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
  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={e =>
            this.setState(
              {
                searchField: e.target.value
              },
              () =>
                this.setState(prevState => ({
                  monsters: prevState.monsters.filter(monster =>
                    monster.name.includes(this.state.searchField)
                  )
                }))
            )
          }
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
