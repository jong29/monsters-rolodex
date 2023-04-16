import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      allMonsters : []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      () => {
        return {monsters: users};
      },
      () => {
        console.log(this.state);
        this.allMonsters = users;
      }
    )
    )
  }

  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          console.log(event);
          this.setState(
            () => {
              return {monsters: this.monsters.filter((el) => el.toLowerCase().includes(event.target.value.toLowerCase()))};
            }
          )
        }} />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div> 
          );
        })}
      </div>
    );
  }
}

export default App;
