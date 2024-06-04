// src/components/profils/UserProfil.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserProfil from './userProfil';

const mockStore = configureStore([thunk]);

describe('UserProfil Component', () => {
  let store;

  const mockUser = {
    _id: '507f1f77bcf86cd799439011',
    nom: 'John',
    prenom: 'Doe',
    email: 'john.doe@example.com',
    role: 'client',
    ville: 'Paris'
  };

  const mockReservations = [
    { details: 'Reservation 1' },
    { details: 'Reservation 2' }
  ];

  const mockMessages = [
    { content: 'Message 1' },
    { content: 'Message 2' }
  ];

  beforeEach(() => {
    store = mockStore({
      auth: { user: mockUser },
      reservations: mockReservations,
      messages: mockMessages
    });
  });

  test('renders UserProfil component', () => {
    render(
      <Provider store={store}>
        <Router>
          <UserProfil />
        </Router>
      </Provider>
    );

    // Vérifie que les informations de l'utilisateur sont rendues
    expect(screen.getByText(/Bienvenue, John Doe/i)).toBeInTheDocument();

    // Vérifie que les réservations et les messages sont rendus
    expect(screen.getByText(/Reservation 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Message 1/i)).toBeInTheDocument();
  });

  test('allows the user to send a message', async () => {
    render(
      <Provider store={store}>
        <Router>
          <UserProfil />
        </Router>
      </Provider>
    );

    // Simule la saisie d'un nouveau message et la soumission
    fireEvent.change(screen.getByPlaceholderText(/Entrez un message/i), { target: { value: 'New Message' } });
    fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

    // Vérifie que le nouveau message est ajouté à la liste des messages
    expect(await screen.findByText(/New Message/i)).toBeInTheDocument();
  });
});
