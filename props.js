import React from 'react';

  class Person extends React.Component{
    render(){
      return(
        <div>
          <label>I am a {this.props.character} person.</label>
        </div>
      );
    }
  }

  export default Person;

  const person = <Person character = "good"></Person>
