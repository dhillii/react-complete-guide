import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Dave', age: 20},
      {name: 'Baron', age: 17}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked!")
    //DONT DO this.state.persons[0].name = "David"
    this.setState({
      persons: [
      {name: newName, age: 20},
      {name: 'Baron', age: 17},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: event.target, age: 20},
      {name: 'Baron', age: 17},
      ]
    })

  }

  render() {

    return (                                    //This is JSX not HTML
      <div className="App">
        <h1>Daves App Here!</h1>
        <p>This is a paragraph</p>
        <button onClick={() => this.switchNameHandler("WAVEY DAVEY")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Davey!')}>Hobbies: Gardening</Person>

        <Person name="Mom" age="49"/>
      </div>
    );

    //What the above gets compiled to.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'DAVE!'))
  }
}

export default App;
