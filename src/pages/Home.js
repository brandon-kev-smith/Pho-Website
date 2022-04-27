import React from 'react';
import "../css/Home.css"

export default class Home extends React.Component {

    render () {
        return (
            <div>
                <div className='inLine'>
                    <img 
                        className='logo'
                        src={require('./images/PhoSaigonLogo.png')}
                    />
                    <div className='spacer' />
                    <h1 className='homeTitle'>
                        Pho Saigon #8
                    </h1>
                </div>
                <div className='imgBanner'>
                    <img 
                    className="homeBanner"
                    src={require('./images/PhoHomeCropped.jpg')} />
                </div>
            </div>
        );
    }
}