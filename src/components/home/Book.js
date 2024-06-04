import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Book() {
  const [reservations, setReservations] = useState([]);
  const [selectedTransporter, setSelectedTransporter] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [details, setDetails] = useState('');
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleReservation = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/reservations', {
        clientId: user._id,
        transporterId: selectedTransporter,
        departureCity,
        arrivalCity,
        details
      });
      setReservations([...reservations, response.data]);
      setDepartureCity('');
      setArrivalCity('');
      setDetails('');
    } catch (error) {
      console.error("Failed to make reservation", error);
    }
  };

  return (
    <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="bg-white shadow" style={{ padding: "35px" }}>
          <div className="row g-2">
            <div className="col-md-3">
              <select
                className="form-control"
                value={selectedTransporter}
                onChange={(e) => setSelectedTransporter(e.target.value)}
              >
                <option value="">Sélectionnez un transporteur</option>
                {reservations.map((transporter) => (
                  <option key={transporter._id} value={transporter._id}>
                    {transporter.nom} {transporter.prenom}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ville de départ"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ville d'arrivée"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Détails"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={handleReservation}>
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
