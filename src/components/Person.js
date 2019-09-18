import React, { Component } from "react"

class Person extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeSinceArrival: '00:00:00'
    }
  }

  render(){
    const {timeSinceArrival} = this.state
    return (
      <div className="person">
        <h4>{timeSinceArrival}</h4>
      </div>
    )
  }
}

export default Person
