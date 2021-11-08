import React, {Component} from 'react';
import './App.css'
import Body from './components/Body'
import Panel from './components/Panel'



class App extends Component {
  constructor(props){
      super(props);

      this.state = {
          input: ""
      }

      this.calculate = this.calculate.bind(this)
      this.onClick =  this.onClick.bind(this)
      this.backspaceKey = this.backspaceKey.bind(this)
      this.resetKey = this.resetKey.bind(this)
  }

  calculate = () => 
  {
    try{
      this.setState({
        input:(eval(this.state.input) || "") + ""
      })
    }
      catch(e){
        this.setState({
          input: "SYNTAX ERROR"
        })
      }
  }

  backspaceKey = () => {
    this.setState({
      input: this.state.input.slice(0, -1)
    })
  }

  resetKey = () => {
    this.setState({
      input: ""
    })
  }

  onClick = button => {

    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.resetKey()
    }

    else if (button === "CE"){
      this.backspaceKey()
    }

    else {
      this.setState({
        input: this.state.input + button
      })
    }
  }


  render() {
      return (
          <div>
              <div className="calculator-body">
                  <Panel input={this.state.input}/>
                  <Body onClick={this.onClick}/>
              </div>
              <strong><div className = "title">
                <h1>Simple Calculator</h1>
              </div>
              <h4 className = "name">Created by Tony Isern</h4>
              </strong>
          </div>
          
      );
  }
}

export default App;