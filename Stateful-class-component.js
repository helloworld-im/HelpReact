import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
      
    // We declare the state as shown below
    
    this.state = {                           
      x: "This is x from state",    
      y: "This is y from state"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.x}</h1>
        <h2>{this.state.y}</h2>
      </div>
    );
  }
}
export default App;
