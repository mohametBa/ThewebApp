import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TransporterProfil = () => {
  const user = useSelector(state => state.auth.user);
  const clients = useSelector(state => state.clients); // Assuming you have a clients state
  const navigate = useNavigate();

  if (!user || user.role !== 'transporter') {
    navigate('/login');
  }

  return (
    <div className="container mt-5">
      <h2>Bienvenue, {user.nom} {user.prenom}</h2>
      <h3>Clients Disponibles</h3>
      {clients.length === 0 ? (
        <p>Aucun client disponible</p>
      ) : (
        <ul>
          {clients.map(client => (
            <li key={client.id}>{client.nom} {client.prenom}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransporterProfil;
