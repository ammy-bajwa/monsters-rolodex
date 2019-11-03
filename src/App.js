import React from "react";
import { CardList } from "./components/card-list/card-list.component";
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
    console.log("App ", this.props.children);
  }
  render() {
    return (
      <div>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
