/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TransporterProfil = () => {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'transporter') {
      navigate('/login');
    } else {
      fetchReservations();
      fetchMessages();
    }
  }, [user, navigate, fetchReservations, fetchMessages]);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/reservations?transporterId=${user._id}`);
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
        senderId: user._id,
        receiverId: newMessage.receiverId,
        content: newMessage.content,
      });
      setMessages([...messages, response.data]);
      setNewMessage({ receiverId: '', content: '' });
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
            <h3>Envoyer un Message</h3>
            <div className="mb-3">
              <select
                className="form-control"
                value={newMessage.receiverId}
                onChange={(e) => setNewMessage({ ...newMessage, receiverId: e.target.value })}
              >
                <option value="">Sélectionnez un client</option>
                {reservations.map(reservation => (
                  <option key={reservation.clientId._id} value={reservation.clientId._id}>
                    {reservation.clientId.nom} {reservation.clientId.prenom}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="form-control mt-2"
                value={newMessage.content}
                onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
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
            <h3>Vos Réservations</h3>
            <ul className="list-group">
              {reservations.length > 0 ? (
                reservations.map((reservation, index) => (
                  <li key={index} className="list-group-item">{reservation.details}</li>
                ))
              ) : (
                <li className="list-group-item">Aucune réservation reçue pour le moment</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransporterProfil;
