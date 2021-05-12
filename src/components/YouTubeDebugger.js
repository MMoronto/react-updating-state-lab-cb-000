import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }
  
  handleClick = () => {
    this.setState(previousState => {
      return {
        bitrate: previousState + 4,
        resolution: !previousState.resolution 
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.bitrate}</h1> 
        <button onClick={this.handleClick}>{this.state.toggled ? "8" : "12"}</button>      

        <h1>{this.state.video}</h1>    
        <button onClick={this.handleClick}>{this.state.toggled ? "1080p" : "720p"}</button>
      </div>
      );
  }  
}

export default YouTubeDebugger;
