import React, {Component} from 'react';
import './Body.css'
import './Panel.css'


export class Body extends Component
{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className = "container">
        <div className = "button">
        
        <button className ="buttonleft" onClick={e => this.props.onClick(e.target.value)}value = "(">(</button>
        <button className ="buttonCE" onClick={e => this.props.onClick(e.target.value)} value = "CE">CE</button>
        <button className ="buttonright" onClick={e => this.props.onClick(e.target.value)} value = ")">)</button>
        <button className ="buttonC" onClick={e => this.props.onClick(e.target.value)} value = "C">C</button>
        <button className = 'button9' onClick={e => this.props.onClick(e.target.value)} value = "9">9</button>
        <button className = 'button8' onClick={e => this.props.onClick(e.target.value)} value = "8">8</button>
        <button className = 'button7' onClick={e => this.props.onClick(e.target.value)} value = "7">7</button>
        <button className = 'button÷' onClick={e => this.props.onClick(e.target.value)} value = "/">÷</button>
        <button className = 'button6' onClick={e => this.props.onClick(e.target.value)} value = "6">6</button>
        <button className = 'button5' onClick={e => this.props.onClick(e.target.value)} value = "5">5</button>
        <button className = 'button4' onClick={e => this.props.onClick(e.target.value)} value = "4">4</button>
        <button className = 'button×' onClick={e => this.props.onClick(e.target.value)} value = "*">×</button>
        <button className = 'button3' onClick={e => this.props.onClick(e.target.value)} value = "3">3</button>
        <button className = 'button2' onClick={e => this.props.onClick(e.target.value)} value = "2">2</button>
        <button className = 'button1' onClick={e => this.props.onClick(e.target.value)} value = "1">1</button>
        <button className = 'button-' onClick={e => this.props.onClick(e.target.value)} value = "-">-</button>
        <button className = 'button0' onClick={e => this.props.onClick(e.target.value)} value = "0">0</button>
        <button className = 'buttondot' onClick={e => this.props.onClick(e.target.value)} value = ".">.</button>
        <button className = 'buttonequals' onClick={e => this.props.onClick(e.target.value)} value = "=">=</button>
        <button className = 'buttonplus' onClick={e => this.props.onClick(e.target.value)} value = "+">+</button>
        
        </div>
        </div>
        )
    }

    
        

}

export default Body;