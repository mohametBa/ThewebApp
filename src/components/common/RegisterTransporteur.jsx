import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { registerTransporter } from '../actions/authActions';
import Modal from 'react-modal';

export default function RegisterTransporteur() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        vehicle: '',
        ville: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const { nom, prenom, email, password, vehicle, ville } = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validator.isEmail(email)) {
            return alert('Invalid email');
        }

        if (!validator.isStrongPassword(password)) {
            return alert('Password must be stronger');
        }

        if (!nom || !prenom || !vehicle || !ville) {
            return alert('All fields are required');
        }

        if (!acceptedTerms) {
            return alert('You must accept the terms and conditions');
        }

        try {
            await dispatch(registerTransporter({ nom, prenom, email, password, vehicle, ville }));
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Inscription Transporteur</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nom"
                                        value={nom}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Prénom</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="prenom"
                                        value={prenom}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mot de passe</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Véhicule</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="vehicle"
                                        value={vehicle}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ville</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ville"
                                        value={ville}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={acceptedTerms}
                                        onChange={() => setAcceptedTerms(!acceptedTerms)}
                                    />
                                    <label htmlFor="terms">
                                        J'accepte les <span style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setIsModalOpen(true)}>Conditions d'utilisation</span>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-3">
                                    Inscription
                                </button>
                            </form>
                            <p className="text-center mt-3">
                                Déjà un compte ? <Link to="/login">Connexion</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Politique de Confidentialité"
            >
                <h2>Politique de Confidentialité</h2>
                <div>
                    <p>Politique de Confidentialité
Introduction
Chez ColisGP, nous nous engageons à protéger et à respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.
1. Informations que nous collectons
Nous collectons et traitons différentes catégories de données personnelles vous concernant :
* Informations d'identification : nom, prénom, adresse postale, adresse email, numéro de téléphone.
* Informations de compte : identifiants de connexion, mots de passe.
* Informations de transaction : détails des envois, informations de paiement.
* Données techniques : adresse IP, type de navigateur, version du système d'exploitation, logs de connexion.
2. Utilisation de vos informations
Nous utilisons les informations collectées pour :
* Fournir nos services : traitement des commandes, gestion des livraisons et des expéditions.
* Gérer votre compte : création et gestion de votre compte utilisateur.
* Améliorer nos services : analyse des données pour améliorer notre site web et nos services.
* Communiquer avec vous : répondre à vos questions, vous envoyer des notifications sur vos commandes, vous informer des mises à jour et des offres promotionnelles (si vous y avez consenti).
3. Partage de vos informations
Nous pouvons partager vos informations personnelles avec :
* Prestataires de services : entreprises tierces qui fournissent des services en notre nom, tels que les services de paiement et de livraison.
* Autorités légales : lorsque la loi l'exige ou pour protéger nos droits légaux.
4. Conservation de vos données
Nous ne conservons vos données personnelles que le temps nécessaire pour les finalités pour lesquelles elles ont été collectées, y compris pour satisfaire à toute exigence légale, comptable ou de rapport.
5. Sécurité de vos données
Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive et l'accès non autorisé.
6. Vos droits
Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
* Droit d'accès : vous pouvez demander l'accès à vos données personnelles.
* Droit de rectification : vous pouvez demander la correction des données inexactes ou incomplètes.
* Droit à l'effacement : vous pouvez demander l'effacement de vos données personnelles.
* Droit à la limitation du traitement : vous pouvez demander la limitation du traitement de vos données personnelles.
* Droit à la portabilité des données : vous pouvez demander que vos données personnelles vous soient fournies dans un format structuré, couramment utilisé et lisible par machine.
* Droit d'opposition : vous pouvez vous opposer au traitement de vos données personnelles dans certaines circonstances.
7. Contact
Si vous avez des questions sur cette politique de confidentialité ou si vous souhaitez exercer vos droits, veuillez nous contacter à :
* Email : mohametba31@gmail.com
* Adresse : 22 Rue Jacqueline Auriol  Toulouse
8. Modifications de cette politique
Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de toute modification en publiant la nouvelle politique sur cette page. Nous vous conseillons de consulter régulièrement cette page pour prendre connaissance des modifications.
</p>
                    {}
                </div>
                <button onClick={() => setIsModalOpen(false)}>Fermer</button>
            </Modal>
        </div>
    );
}
