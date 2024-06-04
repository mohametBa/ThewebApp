// src/components/common/Login.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../actions/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    if (user) {
      if (user.role === 'client') {
        navigate('/profile/user');
      } else if (user.role === 'transporter') {
        navigate('/profile/transporter');
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(email, password));
      if (result && result.role) {
        if (result.role === 'client') {
          navigate('/profile/user');
        } else if (result.role === 'transporter') {
          navigate('/profile/transporter');
        }
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Connexion</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Connexion
                </button>
              </form>
              {error && <p className="text-danger text-center mt-3">{error}</p>}
              <p className="text-center mt-3">
                Pas encore de compte ? 
                <Link to="/register-client">Inscription Client</Link> <span>ou</span>
                <Link to="/register-transporteur">Inscription Transporteur</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
