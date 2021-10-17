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


        <button className ="buttonleft" onClick={e => this.props.onClick(e.target.name)}>(</button>
        <button className ="buttonCE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
        <button className ="buttonright" onClick={e => this.props.onClick(e.target.name)}>)</button>
        <button className ="buttonC" onClick={this.state}>C</button>
        <button className = 'button9' onClick={this.handleClick}>9</button>
        <button className = 'button8' onClick={this.handleClick}>8</button>
        <button className = 'button7' onClick={this.handleClick}>7</button>
        <button className = 'button÷' onClick={this.handleClick}>÷</button>
        <button className = 'button6' onClick={this.handleClick}>6</button>
        <button className = 'button5' onClick={this.handleClick}>5</button>
        <button className = 'button4' onClick={this.handleClick}>4</button>
        <button className = 'button×' onClick={this.handleClick}>×</button>
        <button className = 'button3' onClick={this.handleClick}>3</button>
        <button className = 'button2' onClick={this.handleClick}>2</button>
        <button className = 'button1' onClick={this.handleClick}>1</button>
        <button className = 'button-' onClick={this.handleClick}>-</button>
        <button className = 'button0' onClick={this.handleClick}>0</button>
        <button className = 'buttondot' onClick={this.handleClick}>.</button>
        <button className = 'buttonequals' onClick={this.handleClick}>=</button>
        <button className = 'buttonplus' onClick={this.handleClick}>+</button>
        



        

        </div>
        </div>

        
        )
    }

    
        

}

export default Body;