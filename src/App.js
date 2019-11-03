import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }
  renderMoster = monster => <h1 key={monster.id}>{monster.name}</h1>;
  render() {
    return <div>{this.state.monsters.map(this.renderMoster)}</div>;
  }
}

export default App;
