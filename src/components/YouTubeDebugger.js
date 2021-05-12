import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    
    this.state = {
      timesClicked: 0
    };
  }
  
  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>Clickez Ici!</button>
      );
  }  
}

export default YouTubeDebugger;
