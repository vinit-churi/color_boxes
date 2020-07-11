import React, { Component } from 'react';
import './ColorPallet.css';
import Box from '../box/Box';

export default class ColorPallet extends Component{
    constructor(props){
        super(props);
        this.state={
            boxes: Array.from({length : 20})
        }
        this.colorGenerator = this.colorGenerator.bind(this);
        this.replaceColor = this.replaceColor.bind(this);
    }
    colorGenerator(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return `#${randomColor}`;
    }
    storeColor(){
        this.setState((currState)=>(
            {
                boxes: currState.boxes.map(()=> (
                    this.colorGenerator()   
                ))
            }
        ))
    }
    replaceColor(index){
        const random = this.colorGenerator();
        // console.log(`this is index ${index} will be assigned ${random}`)
        // console.log([...this.state.boxes].splice(index,1,random));
        let items = [...this.state.boxes]
        items.splice(index,1,random)
        // console.log(items)

        this.setState({boxes: items});
    }
    render(){
        return(
            <div>
                <Box amount={this.state.boxes} changeColor={this.colorGenerator} replaceColor={this.replaceColor}/>
                <button onClick={this.storeColor.bind(this)}>click</button>
            </div>
        )
    }
}