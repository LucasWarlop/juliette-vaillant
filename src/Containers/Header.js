import React, { Component } from 'react';

import Portrait from '../Assets/images/juliette_vaillant_portrait_cut-min.jpg';

export default class Header extends Component {
    render() {
        return (
                <header className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1>Juliette Vaillant</h1>
                        </div>
                        <div className="flip-card-back">
                            <h2>Étudiante en Droit</h2>
                        </div>
                    </div>
                </header>
        )
    }
}
