import React, { Component } from 'react';
import '../css/MenuItem.css'


export default class MenuItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const nameEnglish = this.props.nameEnglish;
        const nameViet = this.props.nameViet;
        const nameKorean = this.props.nameKorean;
        const value = this.props.value;
        const price = this.props.price;
        

        return (
            <div className='item'>
                <h4 className='center'>{value} - {nameEnglish}</h4>
                <p className='center'>{nameViet} - {nameKorean}</p>
                <p className='center'>{price}</p>
            </div>
        );
    }
}