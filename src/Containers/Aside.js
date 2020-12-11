import React, { Component } from 'react'

export default class Aside extends Component {
    render() {
        return (
            <aside className="aside">
            <section className="aside__personnal">
                <h3 className="aside__personnal__title"><i class="fas fa-user-circle"></i> Informations</h3>
                <div className="aside__personnal__body">
                    <div className="aside__personnal__body--1">
                        <p>1 square Spontini, 78150 Le Chesnay</p>
                        <p>06 22 95 60 55 | juliettevaillant@yahoo.fr</p>
                    </div>
                    <div className="aside__personnal__body--2">
                        
                    </div>
                </div>
            </section>
            
            <section className="aside__language">
                <h3 className="aside__language__title"><i class="fas fa-globe"></i> Centres d’Intérêt</h3>
                <div className="aside__language__body">
                    <p>Développement personnel</p>
                    <p>Participation au projet universitaire d’information juridique à la décolonisation,
                        Université Paris Nanterre</p>
                    <p>Dépouillement des votes pour les élections parlementaires européennes 2019</p>
                </div>
            </section>

            <section className="aside__hobbie">
                <h3 className="aside__hobbie__title"><i class="fas fa-thumbs-up"></i> Hobbies</h3>
                <div className="aside__hobbie__body">
                    <p>Pratique de la course / boxe</p>
                    <p>Pratique de la gymnastique en compétition pendant 7 ans</p>
                    <p>Initiation au Yoga</p>
                </div>
            </section>
            
        </aside>
        )
    }
}
