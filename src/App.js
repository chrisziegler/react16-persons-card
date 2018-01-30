import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 'fg5', name: 'Elon Musk', age: 46 },
      { id: 'ar3', name: 'Neil deGrasse Tyson', age: 59 },
      { id: 'po9', name: 'Timothy Berners-Lee ', age: 62 }
    ],
    showPersons: false,
    customText: 'WASHINGTONSTATECOUGS'
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

  customTextHandler = (event) => {
    this.setState({customText: event.target.value})
  }

  deleteCharacterHandler = (id) => {
  // let customText = this.state.customText.split('');
  let customText = [...this.state.customText];
  customText.splice(id, 1);
  const updatedCustomText = customText.join('');
  this.setState({customText: updatedCustomText})
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
    
    
    const charList = this.state.customText.split('').map((char, index) => {
      // let id = Math.floor(Math.random()*10000);
      return (
        <CharComponent 
        character={char} 
        key={index}
        clicked={() => this.deleteCharacterHandler(index)}
        />
      )
    })
    

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
        <h1>Interesting People</h1>
        <p>Space and Technology</p>
        <div>
          <input onChange={this.customTextHandler}
          type="text"
          value={this.state.customText}
        />
        <span className="length">{this.state.customText.length}</span>
        <ValidationComponent length={this.state.customText.length} />
        <div className="charList">{charList}</div>
        </div>
        <button
        style={style}
        onClick={this.togglePersonHandler}><span className="fa fa-align-justify"></span>Toggle People</button>
        {persons}
      </div>
    );
  }
}

export default App;
