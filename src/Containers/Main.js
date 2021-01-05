import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="main__etude flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fas fa-graduation-cap"/>
                        </div>
                        <article className="flip-card-back">
                            <h2 style={{color: "white"}}><i className="fas fa-user-graduate"/> Études</h2>
                            <div className="etudes">
                                <div className="etude" id="ancre1">
                                    <h3>Master 1 Finances publiques et fiscalité</h3>
                                    <h4>UNIVERSITÉ DE MONTPELLIER</h4>
                                    <strong>2020 - 2021</strong>
                                    <p>
                                        Enseignements : Finances publiques approfondies, Droit public économique, Droit fiscal, Droit de
                                        l’urbanisme, Protection sociale, Approche transversale des finances publiques
                                    </p>
                                </div>
                                <div className="etude" id="ancre2">
                                    <h3>Troisième année Licence de Droit</h3>
                                    <h4>UNIVERSITÉ PARIS X NANTERRE</h4>
                                    <strong>2019 - 2020</strong>
                                    <p>
                                        Enseignements : Droit fiscal, Droit des services publics, Droit public des biens, Droit des libertés
                                        fondamentales, Droit international public, Droit de l’Union européenne, Droit du travail, Droit de
                                        la protection sociale.
                                    </p>
                                </div>
                                <div className="etude" id="ancre3">
                                    <h3>Deuxième année Licence de Droit</h3>
                                    <h4>UNIVERSITÉ PARIS X NANTERRE</h4>
                                    <strong>2018 - 2029</strong>
                                    <p>
                                        Enseignements : Droit administratif, Droit des contrats, Finances publiques, Droit de l’entreprise,
                                        Droit européen, Droit international public (les sources), Droit de la responsabilité civile, Droit
                                        privé des biens.
                                    </p>
                                </div>
                                <div className="etude" id="ancre4">
                                    <h3>Première année Licence de Droit et de Sciences Politiques</h3>
                                    <h4>UNIVERSITÉ VERSAILLES SAINT QUENTIN</h4>
                                    <strong>2017 - 2018</strong>
                                    <p>
                                        Enseignements : Droit constitutionnel, Introduction au droit public, Droit de la famille, Histoire du
                                        droit, Idées politiques, Institutions internationales et européennes.
                                    </p>
                                </div>
                                <div className="etude" id="ancre5">
                                    <h3>Baccalauréat Scientifique</h3>
                                    <h4>Lycée La Bruyère à Versailles</h4>
                                    <strong>2014 - 2017</strong>
                                    <p>
                                        Option Science de la Vie et de la Terre
                                    </p>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
                <div className="main__competence flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fas fa-clipboard-list-check"/>
                        </div>
                        <article className="flip-card-back">
                            <h2><i className="fas fa-clipboard-check"/> Compétences</h2>
                            <div className="competences">
                                <div className="competence">
                                    <h3>Secours</h3>
                                    <p>Formation aux premiers secours au sein de l’association La Croix Rouge à Versailles.</p>
                                </div>
                                <div className="competence">
                                    <h3>Langues étrangères</h3>
                                    <p>Anglais niveau C1</p>
                                    <p>Espagnol niveau B2.</p>
                                </div>
                                <div className="competence">
                                    <h3>Informatiques</h3>
                                    <p>Diplôme C2I Compétences numériques (2019)</p>
                                    <p>Diplôme C2I Machines et logiciels (2020)</p>
                                    <p>Pack office, Pages, Réseaux sociaux, Base de données (Dalloz, Lexis 360)</p>
                                </div>
                                <div- className="competence">
                                    <h3>Permis</h3>
                                    <p>Permis B</p>
                                </div->
                            </div>
                        </article>
                    </div>
                </div>
                <div className="main__profesionnel flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <i className="fas fa-briefcase"/>
                        </div>
                        <article className="flip-card-back">
                            <h2><i className="fas fa-user-tie"/> Éxperiences professionnelles</h2>
                            <div className="professionels">
                                <div className="professionel">
                                    <h3>Stagiaire dans l’office notarial Dwarka</h3>
                                    <h4>Port Louis (Ile Maurice)</h4>
                                    <strong>Juillet - Août 2020</strong>
                                    <p>
                                        Stage professionnel : Annulé en raison de la COVID19.
                                    </p>
                                </div>
                                <div className="professionel">
                                    <h3>Ambassadrice de l’antenne UNICEF</h3>
                                    <h4>Université de Versailles Saint Quentin</h4>
                                    <strong>2017 - 2018</strong>
                                    <p>
                                        Mission associative : Création de l’antenne de la faculté en coordination avec UNICEF France, recrutement, vente de
                                        produits.
                                    </p>
                                </div>
                                <div className="professionel">
                                    <h3>Chargée de vente à l’ Atelier du fermier</h3>
                                    <h4>Paris et Le Chesnay</h4>
                                    <strong>Juin - Juillet 2019</strong>
                                    <p>
                                        Emplois étudiant : Vente de produits alimentaires, apprentissage et conseils sur les valeurs nutritionnelles.
                                    </p>
                                </div>
                                <div className="professionel">
                                    <h3>Chargée de vente chez du Pareil au même,</h3>
                                    <h4>Le Chesnay</h4>
                                    <strong>Juin 2018</strong>
                                    <p>
                                        Emplois étudiant : Vente de prêt à porter, responsable de la caisse, conseils.
                                    </p>
                                </div>
                                <div className="professionel">
                                    <h3>Hôtesse à l’événement « Jardin Jardin » jardin des Tuileries pour La Ferme de
                                        Gally</h3>
                                    <h4>Paris</h4>
                                    <strong>Mai 2018</strong>
                                    <p>
                                        Emplois étudiant : Accueil et information des clients, réponses aux demandes de renseignements.
                                    </p>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
            </main>
        )
    }
}
