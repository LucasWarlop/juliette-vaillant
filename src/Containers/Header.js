import React, { Component } from 'react';

import Portrait from '../Assets/images/juliette_vaillant_portrait_cut-min.jpg';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__body">
                    <h1 className="header__title">Juliette Vaillant</h1>
                </div>
                <div className="header__img">
                    <img src={Portrait} width="100%" height="auto" alt="portrait"/>
                </div>
            </header>
        )
    }
}
