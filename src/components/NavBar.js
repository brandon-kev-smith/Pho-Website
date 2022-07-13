import React, { Component } from 'react';
import '../css/NavBar.css'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props){
    super(props);

    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);

    this.state = {
      onHome: true,
      onMenu: false,
      onAbout: false
    }
  }

  handleHomeClick() {
    this.setState({onHome: true, onMenu: false, onAbout: false});
  }
  handleMenuClick() {
    this.setState({onHome: false, onMenu: true, onAbout: false});
  }
  handleAboutClick(){
    this.setState({onHome: false, onMenu: false, onAbout: true});
  }

  render() {
    var home = <li onClick={this.handleHomeClick}> <Link to="/">Home</Link> </li>;
    var menu = <li onClick={this.handleMenuClick}> <Link to="/menu">Menu</Link> </li>;
    var about = <li onClick={this.handleAboutClick}> <Link to="/about">About</Link> </li>

    if (this.state.onHome){
      home = <li onClick={this.handleHomeClick} className='isClicked'> <Link to="/">Home</Link> </li>;
    }
    if (this.state.onMenu){
      menu = <li onClick={this.handleMenuClick} className='isClicked'> <Link to="/menu">Menu</Link> </li>;
    }
    if (this.state.onAbout){
      about = <li onClick={this.handleAboutClick} className='isClicked'> <Link to="/about">About</Link> </li>
    }

    return (
      <ul>
        {home}
        {menu}
        {about}
      </ul>
    );
  }
}