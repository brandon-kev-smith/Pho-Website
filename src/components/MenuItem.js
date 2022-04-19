import React, { Component } from 'react';


export default class MenuItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const nameEnglish = this.props.nameEnglish;
        const nameViet = this.props.nameViet;
        const nameKorean = this.props.nameKorean;
        const key = this.props.key;
        const price = this.props.price;
        

        return (
            <div>
                <p>{nameEnglish}</p>
                <p>{nameViet}</p>
                <p>{nameKorean}</p>
                <p>{key}</p>
                <p>{price}</p>
            </div>
        );
    }
}