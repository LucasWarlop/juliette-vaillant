import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <section className="main__etude">
                    <a><i class="fas fa-user-graduate"></i> Études</a>
                </section>
                <section className="main__competence">
                    <a><i class="fas fa-clipboard-check"></i> Compétences</a>
                </section>
                <section className="main__profesionnel">
                    <a><i class="fas fa-briefcase"></i> Éxperiences Professionnelles</a>
                </section>
            </main>
        )
    }
}
