import React from "react";
import uuid from "uuid";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: [
      {
        name: "Frankenstein",
        id: uuid()
      },
      {
        name: "Zoombie",
        id: uuid()
      },
      {
        name: "Dracula",
        id: uuid()
      }
    ]
  };
  renderMoster = monster => <h1 key={monster.id}>{monster.name}</h1>;
  render() {
    return <div>{this.state.monsters.map(this.renderMoster)}</div>;
  }
}

export default App;
