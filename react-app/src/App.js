import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
   this.title = 'React App';
   this.state = {
     value: '',
     listItems: [
       { id: 0, text: 'Desks' },
       { id: 1, text: 'Chairs' },
       { id: 2, text: 'Coffee Cup' }
     ]
   };

   //Syntax to make sure we know what "this" is in our two events
   this.handleChange = this.handleChange.bind(this);
   this.addItem = this.addItem.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addItem() {
    let newArray = this.state.listItems;
    let newId = parseInt(newArray[newArray.length - 1].id, 10);
    newArray.push({ id: newId + 1, text: this.state.value });
    this.setState({ listItems: newArray });
  }
  render() {
    let renderedItems = this.state.listItems;
    return (
      <div id="app">
        <h1>{ this.title }</h1>
        <input type="text" className="k-textbox" value={ this.state.value } onChange= { this.handleChange }/>
        <button type="button" className="k-button k-primary" onClick={ this.addItem }>Add Item</button>
        <ul>
          {
            renderedItems.map((item) =>
            {
              return <li key={ item.id }>{ item.text }</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
