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

  switchNameHandler = () => {
    //console.log("Was clicked!")
    //DONT DO this.state.persons[0].name = "David"
    this.setState({
      persons: [
      {name: 'David', age: 20},
      {name: 'Baron', age: 17}
      ]
    })
  }

  render() {

    return (                                    //This is JSX not HTML
      <div className="App">
        <h1>Daves App Here!</h1>
        <p>This is a paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies: Coding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Gardening</Person>
        <Person name="Mom" age="49"></Person>
      </div>
    );

    //What the above gets compiled to.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'DAVE!'))
  }
}

export default App;
