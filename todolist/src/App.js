import axios from 'axios'
import React, { Component } from 'react'

export class App extends Component {
  componentDidMount() {
    axios.get(`http://localhost:4000/api/user`).then(res => {console.log(res.data)
        
  
      
        
      })
  }


  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

export default App
