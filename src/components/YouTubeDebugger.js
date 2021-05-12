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
    this.state(previousState => {
      return {
        hasBeenClicked: true
      }
    })
  }

  render() {
    return ();
  }  
}

export default YouTubeDebugger;
