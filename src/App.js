import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import React from "react"

// class App extends React.Component{
//   render(){
//     return <div><App2></App2>
//     <App2></App2>
//     <App2></App2></div>
//   }
// }

class App extends React.Component{
  constructor(){
    super()
    this.state={
      title:'hello from Neeraj'
    }
   }
  render(){
    return <div><h1>{this.state.title}</h1></div>
  }
}
export default App;