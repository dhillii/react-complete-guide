import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Dave', age: 20},
      {name: 'Baron', age: 17}
    ],
    showPersons: false
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
      {name: event.target.value, age: 20},
      {name: 'Baron', age: 17},
      ]
    })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (                                    //This is JSX not HTML
      <div className="App">
        <h1>Daves App Here!</h1>
        <p>This is a paragraph</p>

        <button 
        style={style} 
        onClick={this.togglePersonsHandler}>Toggle</button>

        {
          this.state.showPersons ?
          <div >
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}/>

          </div> : null
        }    
      </div>
    );

    //What the above gets compiled to.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'DAVE!'))
  }
}

export default App;
