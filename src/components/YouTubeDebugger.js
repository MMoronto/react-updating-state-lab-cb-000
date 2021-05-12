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
        bitrate: previousState + 4
        resolution: !previousState.resolution 
      }
    })
  }

  render() {
    return (
      <div>
        <button this.onClick={}></button>
        <button></button>
      </div>
      );
  }  
}

export default YouTubeDebugger;
