import React, { Component } from 'react';
import '../css/MenuNavBar.css'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Appetizers from '../pages/menu/Appetizers';
import Pho from '../pages/menu/Pho';
import Sandwiches from '../pages/menu/Sandwiches';
import Vermicelli from '../pages/menu/Vermicelli';
import RicePlates from '../pages/menu/RicePlates';
import FriedRice from '../pages/menu/FriedRice';
import StirFriedNoodles from '../pages/menu/StirFriedNoodles';
import Beverages from '../pages/menu/Beverages';

export default class MenuNavBar extends Component {
    constructor(props) {
        super(props);

        this.handleAppClick = this.handleAppClick.bind(this);
        this.handlePhoClick = this.handlePhoClick.bind(this);
        this.handleSandClick = this.handleSandClick.bind(this);
        this.handleVermClick = this.handleVermClick.bind(this);
        this.handleRiceClick = this.handleRiceClick.bind(this);
        this.handleFriceClick = this.handleFriceClick.bind(this);
        this.handleStirClick = this.handleStirClick.bind(this);
        this.handleBevClick = this.handleBevClick.bind(this);


        this.state = {
            app: true,
            pho: false,
            sand: false,
            verm: false,
            rice: false,
            frice: false,
            stir: false,
            bev: false
        }
    }

    handleAppClick() { this.setState({ app: true, pho: false, sand: false, verm: false, rice: false, frice: false, stir: false, bev: false }) }
    handlePhoClick() { this.setState({ app: false, pho: true, sand: false, verm: false, rice: false, frice: false, stir: false, bev: false }) }
    handleSandClick() { this.setState({ app: false, pho: false, sand: true, verm: false, rice: false, frice: false, stir: false, bev: false }) }
    handleVermClick() { this.setState({ app: false, pho: false, sand: false, verm: true, rice: false, frice: false, stir: false, bev: false }) }
    handleRiceClick() { this.setState({ app: false, pho: false, sand: false, verm: false, rice: true, frice: false, stir: false, bev: false }) }
    handleFriceClick() { this.setState({ app: false, pho: false, sand: false, verm: false, rice: false, frice: true, stir: false, bev: false }) }
    handleStirClick() { this.setState({ app: false, pho: false, sand: false, verm: false, rice: false, frice: false, stir: true, bev: false }) }
    handleBevClick() { this.setState({ app: false, pho: false, sand: false, verm: false, rice: false, frice: false, stir: false, bev: true }) }



    render() {
        var app = <li onClick={this.handleAppClick}><Link to="/menu/appetizers">Appetizers</Link></li>;
        var pho = <li onClick={this.handlePhoClick}><Link to="/menu/pho">Pho</Link></li>;
        var sand = <li onClick={this.handleSandClick}><Link to="/menu/sandwiches">Sandwiches</Link></li>;
        var verm = <li onClick={this.handleVermClick}><Link to="/menu/vermicelli">Vermicelli</Link></li>;
        var rice = <li onClick={this.handleRiceClick}><Link to="/menu/ricePlates">Rice Plates</Link></li>;
        var frice = <li onClick={this.handleFriceClick}><Link to="/menu/friedRice">Fried Rice</Link></li>;
        var stir = <li onClick={this.handleStirClick}><Link to="/menu/stirFriedNoodles">Stir Fried Noodles</Link></li>;
        var bev = <li onClick={this.handleBevClick}><Link to="/menu/beverages">Beverages</Link></li>;

        if(this.state.app) {app = <li><Link to="/menu/appetizers" className='isClicked'>Appetizers</Link></li>;}
        if(this.state.pho) {pho = <li><Link to="/menu/pho" className='isClicked'>Pho</Link></li>;}
        if(this.state.sand) {sand = <li><Link to="/menu/sandwiches" className='isClicked'>Sandwiches</Link></li>;}
        if(this.state.verm) {verm = <li><Link to="/menu/vermicelli" className='isClicked'>Vermicelli</Link></li>;}
        if(this.state.rice) {rice = <li><Link to="/menu/ricePlates" className='isClicked'>Rice Plates</Link></li>;}
        if(this.state.frice) {frice = <li><Link to="/menu/friedRice" className='isClicked'>Fried Rice</Link></li>;}
        if(this.state.stir) {stir = <li><Link to="/menu/stirFriedNoodles" className='isClicked'>Stir Fried Noodles</Link></li>;}
        if(this.state.bev) {bev = <li><Link to="/menu/beverages" className='isClicked'>Beverages</Link></li>;}


        return (
            <div>
                <ul>
                    {app}
                    {pho}
                    {sand}
                    {verm}
                    {rice}
                    {frice}
                    {stir}
                    {bev}
                </ul>
                <Routes>
                    <Route path='/menu/appetizers' element={<Appetizers />} />
                    <Route path='/menu/Pho' element={<Pho />} />
                    <Route path='/menu/sandwiches' element={<Sandwiches />} />
                    <Route path='/menu/vermicelli' element={<Vermicelli />} />
                    <Route path='/menu/ricePlates' element={<RicePlates />} />
                    <Route path='/menu/friedRice' element={<FriedRice />} />
                    <Route path='/menu/stirFriedNoodles' element={<StirFriedNoodles />} />
                    <Route path='/menu/beverages' element={<Beverages />} />
                </Routes>
                <Outlet />
            </div>
        );
    }
}