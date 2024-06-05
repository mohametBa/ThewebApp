import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { registerClient } from '../actions/authActions';
import Modal from 'react-modal';
import PrivacyModal from './PrivacyModal'

export default function RegisterClient() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        ville: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const { nom, prenom, email, password, ville } = formData;
    const error = useSelector(state => state.auth.error);

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

        if (!nom || !prenom || !ville) {
            return alert('All fields are required');
        }

        if (!acceptedTerms) {
            return alert('You must accept the terms and conditions');
        }

        try {
            await dispatch(registerClient({ nom, prenom, email, password, ville }));
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
                            <h3>Inscription Client</h3>
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
                            {error && <p className="text-danger text-center mt-3">{error}</p>}
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
                    <p>Chez [Nom de votre entreprise], nous nous engageons à protéger et à respecter votre vie privée...</p>
                    {PrivacyModal}
                </div>
                <button onClick={() => setIsModalOpen(false)}>Fermer</button>
            </Modal>
        </div>
    );
}
