import React, { Component } from 'react'

class Room extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      people: [],
      totalVisits: 1
    }
  }

  render(){
    return (
      <div className="room-container">
        <button>New Visitor</button>
        <div className="room">
        </div>
      </div>
    )
  }
}

export default Room