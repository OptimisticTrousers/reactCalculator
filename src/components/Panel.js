import React, {Component} from 'react';


class Panel extends React.Component
{

    constructor(props){
        super(props)
    }



    render(){
        let {input} = this.props
        
        return(
        <div className = "panel">
            <div className = "flexbox-item1">
            <h1>{input}</h1>
            </div>
            </div>
        
        )
    }

    
        

}

export default Panel;