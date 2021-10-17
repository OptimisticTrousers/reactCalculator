import React, {Component} from 'react';
import './Panel.css'
import './Body.css'
import './Body.js'
import Body from './Body.js';


export class Panel extends React.Component
{

    constructor(props){
        super(props);

        this.state = {
            input: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            input: event.input.value
        });
    }



    render(){
        
        return(
        <div className = "panel">
            <div className = "flexbox-item1">
            <input value = {this.state.input} onChange = {this.handleChange}/>
            <h1>{this.state.input}</h1>
            </div>
            </div>
        
        )
    }

    
        

}

export default Panel;