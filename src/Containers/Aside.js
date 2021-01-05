import React, { Component } from 'react'

export default class Aside extends Component {
    render() {
        return (
            <aside className="aside">
            <section className="aside__personnal">
                <h3 className="aside__personnal__title"><i class="fas fa-user-circle"></i> Informations</h3>
                <div className="aside__personnal__body">
                    <p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/1+Square+Spontini,+78150+Le+Chesnay-Rocquencourt/@48.8190838,2.1177115,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67da060aa485d:0x27487d39765077e5!8m2!3d48.8190838!4d2.1199002"><i className="fas fa-location-circle"/> 1 square Spontini</a></p>
                    <p><a href="tel:+33622956055"><i className="fas fa-phone"/> 06 22 95 60 55</a> </p>
                    <p> <a href="mailto:juliettevaillant@yahoo.fr"><i className="fas fa-at"/> juliettevaillant@yahoo.fr</a></p>
                    <p><a href="https://www.linkedin.com/in/juliette-vaillant-099345176"><i className="fab fa-linkedin"/> LinkedIn</a></p>
                </div>
            </section>
            
            <section className="aside__language">
                <h3 className="aside__language__title"><i class="fas fa-globe"></i> Centres d’Intérêt</h3>
                <div className="aside__language__body">
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
