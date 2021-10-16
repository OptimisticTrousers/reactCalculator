import React, {Component} from 'react';
import './Body.css'
import './Panel.css'

var count = 0;


function increment(){
    count++;

}

export class Body extends Component
{




    render(){
        return(
        <div className = "container grid">
        <div className = "cell">

        <button className = 'button9' onClick={increment}>9</button>
        <button className = 'button8' onClick={increment}>8</button>
        <button className = 'button7' onClick={increment}>7</button>
        <button className = 'button÷' onClick={increment}>÷</button>
        <button className = 'button6' onClick={increment}>6</button>
        <button className = 'button5' onClick={increment}>5</button>
        <button className = 'button4' onClick={increment}>4</button>
        <button className = 'button×' onClick={increment}>×</button>
        <button className = 'button3' onClick={increment}>3</button>
        <button className = 'button2' onClick={increment}>2</button>
        <button className = 'button1' onClick={increment}>1</button>
        <button className = 'button-' onClick={increment}>-</button>
        <button className = 'button0' onClick={increment}>0</button>
        <button className = 'buttondot' onClick={increment}>.</button>
        <button className = 'buttonequals' onClick={increment}>=</button>
        <button className = 'buttonplus' onClick={increment}>+</button>
        



        

        </div>
        </div>
        )
    }

    
        

}

export default Body;