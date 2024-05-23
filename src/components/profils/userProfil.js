import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import transporters from '../data/Theweb.transporter.json';

const UserProfil = () => {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedTransporter, setSelectedTransporter] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'client') {
      navigate('/login');
    } else {
      fetchReservations();
      fetchMessages();
    }
  }, [user, navigate]);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/reservations?userId=${user._id}`);
      setReservations(response.data);
    } catch (error) {
      console.error("Failed to fetch reservations", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/messages?userId=${user._id}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/messages`, {
        userId: user._id,
        transporterId: selectedTransporter,
        message: newMessage,
      });
      setMessages([...messages, response.data]);
      setNewMessage('');
      setSelectedTransporter('');
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePictureUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePictureUrl(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Bienvenue, {user.nom} {user.prenom}</h2>

      <div className="row">
        <div className="col-md-8">
          <div className="mb-4">
            <h3>Votre Photo de Profil</h3>
            <input type="file" onChange={handleProfilePictureChange} className="form-control-file" />
            {profilePictureUrl ? (
              <img src={profilePictureUrl} alt="Profil" className="img-thumbnail mt-3" style={{ width: '150px', height: '150px' }} />
            ) : (
              <div className="img-thumbnail mt-3" style={{ width: '150px', height: '150px', backgroundColor: '#f0f0f0' }}></div>
            )}
          </div>

          <div className="mb-4">
            <h3>Envoyer un Message à un Transporteur</h3>
            <div className="mb-3">
              <select
                className="form-control"
                value={selectedTransporter}
                onChange={(e) => setSelectedTransporter(e.target.value)}
              >
                <option value="">Sélectionnez un transporteur</option>
                {transporters.map(transporter => (
                  <option key={transporter.email} value={transporter.email}>
                    {transporter.nom} {transporter.prenom} - Services: {transporter.serviceType.join(', ')}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="form-control mt-2"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Entrez un message"
              />
              <button onClick={handleSendMessage} className="btn btn-primary mt-2">Envoyer</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-4">
            <h3>Vos Messages</h3>
            <ul className="list-group">
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <li key={index} className="list-group-item">{message.content}</li>
                ))
              ) : (
                <li className="list-group-item">Aucun message</li>
              )}
            </ul>
          </div>

          <div className="mb-4">
            <h3>Vos Réservations / Colis Envoyés</h3>
            <ul className="list-group">
              {reservations.length > 0 ? (
                reservations.map((reservation, index) => (
                  <li key={index} className="list-group-item">{reservation.details}</li>
                ))
              ) : (
                <li className="list-group-item">Liste vide</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3>Liste des Transporteurs</h3>
        <ul className="list-group">
          {transporters.map(transporter => (
            <li key={transporter.email} className="list-group-item">
              <img src={transporter.image} alt={transporter.nom} className="img-thumbnail" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <strong>{transporter.nom} {transporter.prenom}</strong> - {transporter.vehicleType}
              <p>{transporter.description}</p>
              <p>Services: {transporter.serviceType.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfil;
