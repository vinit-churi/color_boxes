import React, { Component } from 'react';
import './Box.css';

export default class Box extends Component{
    render(){
        return(
            <div className='box'>
                <div className='container'>
                    {this.props.amount.map((n)=> {
                        return (
                            <div className='single' style={{backgroundColor: this.props.changeColor()}}>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}