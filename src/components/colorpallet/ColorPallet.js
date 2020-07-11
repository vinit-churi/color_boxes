import React, { Component } from 'react';
import './ColorPallet.css';
import Box from '../box/Box';

export default class ColorPallet extends Component{
    constructor(props){
        super(props);
        this.state={
            boxes: Array.from({length : 80})
        }
        this.colorGenerator = this.colorGenerator.bind(this);
    }
    colorGenerator(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return `#${randomColor}`;
    }
    storeColor(){
        this.setState((currState)=>(
            {
                boxes: currState.boxes.map(()=>{
                    return (
                        this.colorGenerator()
                    )
                })
            }
        ))
    }
    render(){
        return(
            <div>
                <Box amount={this.state.boxes} changeColor={this.colorGenerator}/>
                <button onClick={this.storeColor.bind(this)}>click</button>
            </div>
        )
    }
}