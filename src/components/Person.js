import React, { Component } from "react"
import Placeholder from "../images/placeholder.png"

class Person extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeSinceArrival: '00:00:00'
    }
  }

  render(){
    const { name, picture, pending } = this.props
    const {timeSinceArrival} = this.state
    return (
      <div className="person">
        {pending ? (
          <img src={Placeholder} alt="Placeholder" />
        ) : (
          <img src={picture} alt={name} />
        )}
        <h3>{name || "Loading..."}</h3>
        <h4>{timeSinceArrival}</h4>
      </div>
    )
  }
}

export default Person
