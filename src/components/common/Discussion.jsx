import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Discussion = () => {
  const { transporterId } = useParams();
  const user = useSelector(state => state.auth.user);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, [transporterId]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/messages?userId=${user._id}&transporterId=${transporterId}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/messages`, {
        userId: user._id,
        transporterId: transporterId,
        message: newMessage,
      });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Discussion avec le Transporteur</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Entrez un message"
        />
        <button onClick={handleSendMessage} className="btn btn-primary mt-2">Envoyer</button>
      </div>
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
  );
};

export default Discussion;
