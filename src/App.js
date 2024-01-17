import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Nav from './Nav';

import whiskey from './dog-images/whiskey.jpg';
import duke from './dog-images/duke.jpg';
import perry from './dog-images/perry.jpg';
import tubby from './dog-images/tubby.jpg';
import './App.css';

class App extends React.Component{
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  };

  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav dogs={this.props.dogs} />
        <Routes dogs={this.props.dogs} />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
