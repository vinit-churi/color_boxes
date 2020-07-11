import React, { Component } from 'react';
import './Box.css';

export default class Box extends Component{
    render(){
        return(
            <div className='box'>
                <div className='container'>
                    {this.props.amount.map((color,index)=> {
                        return (
                            <div id ={`pallet${index}`} className='single' style={{backgroundColor: color}} onClick={() => this.props.replaceColor(index)}>
                                {/* <p>{color}</p>
                                <p>{index}</p> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}