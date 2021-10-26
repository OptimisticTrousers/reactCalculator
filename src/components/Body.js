import React, {Component} from 'react';
import './Body.css'
import './Panel.css'
import './Panel.js'


export class Body extends Component
{
    constructor(props){
        super(props);
    }







    render(){
        return(
        <div className = "container grid">
        <div className = "cell">


        <button className ="buttonleft" onClick={this.handleChange}>(</button>
        <button className ="buttonCE" onClick={this.handleChange}>CE</button>
        <button className ="buttonright" onClick={this.handleChange}>)</button>
        <button className ="buttonC" onClick={this.handleChange}>C</button>
        <button className = 'button9' onClick={this.handleChange}>9</button>
        <button className = 'button8' onClick={this.handleChange}>8</button>
        <button className = 'button7' onClick={this.handleChange}>7</button>
        <button className = 'button÷' onClick={this.handleChange}>÷</button>
        <button className = 'button6' onClick={this.handleChange}>6</button>
        <button className = 'button5' onClick={this.handleChange}>5</button>
        <button className = 'button4' onClick={this.handleChange}>4</button>
        <button className = 'button×' onClick={this.handleChange}>×</button>
        <button className = 'button3' onClick={this.handleChange}>3</button>
        <button className = 'button2' onClick={this.handleChange}>2</button>
        <button className = 'button1' onClick={this.handleChange}>1</button>
        <button className = 'button-' onClick={this.handleChange}>-</button>
        <button className = 'button0' onClick={this.handleChange}>0</button>
        <button className = 'buttondot' onClick={this.handleChange}>.</button>
        <button className = 'buttonequals' onClick={this.handleChange}>=</button>
        <button className = 'buttonplus' onClick={this.handleChange}>+</button>
        



        

        </div>
        </div>

        
        )
    }

    
        

}

export default Body;