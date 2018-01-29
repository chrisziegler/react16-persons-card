import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fg5', name: 'Max', age: 28 },
      { id: 'ar3', name: 'Manu', age: 29 },
      { id: 'po9', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // index would work (with findIndex), but since we have ids available
  nameChangedHandler = (event, id) => {
    const newName = event.target.value;
    this.setState( prevState => ({
      persons: prevState.persons.map(person => {
        if (person.id === id) {
          return {
            ...person,
            name: newName
          };
        }
        return person;
      })
    }));
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const toggleShow = this.state.showPersons;
    this.setState({showPersons: !toggleShow})
  }

  render () {
    const style = {
      backgroundColor: 'linen',
      font: 'inherit',
      border: '1px solid darkkhaki',
      padding: '5px',
      marginBottom: 10,
      cursor: 'pointer',
      borderRadius: 4
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            key={person.id} 
            name={person.name}
            age={person.age}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style={style}
        onClick={this.togglePersonHandler}><span className="fa fa-align-justify"></span>Toggle People</button>
        {persons}
      </div>
    );
  }
}

export default App;
