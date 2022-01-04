// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState(previousState => {
        return {
            hasBeenClicked: !previousState.hasBeenClicked
        }
        
    }, () => console.log(this.state.hasBeenClicked))
    
  };


//   handleClick = () => {
//     this.setState({
//       hasBeenClicked: true
//     })
//     console.log(this.state.hasBeenClicked); // prints false
//   }
  //having just console.log(this.state.hasBeenClicked); will print false as the state is still initial state
  //use callback arrow function as second argument to setState to access new state immediately (hiding in background, batched internally)
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;