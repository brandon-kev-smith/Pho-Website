import React from 'react';
import "../css/Home.css"

export default class Home extends React.Component {

    render () {
        return (
            <div>
                <h1>
                    Pho Saigon #8
                </h1>
                <img 
                class="homeBanner"
                src="https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3035&q=80"/>
            </div>
        );
    }
}