import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Reservation = () => {
  const { state } = useLocation();
  const { reservationDetails } = state || {};

  const handleReservationSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/reservations', reservationDetails);
      alert('Reservation successful');
    } catch (error) {
      console.error("Failed to submit reservation", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Confirm Reservation</h2>
      <form onSubmit={handleReservationSubmit}>
        <div className="mb-3">
          <label className="form-label">Check In Date</label>
          <input type="date" className="form-control" value={reservationDetails.checkInDate} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Check Out Date</label>
          <input type="date" className="form-control" value={reservationDetails.checkOutDate} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Adults</label>
          <input type="number" className="form-control" value={reservationDetails.adults} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Children</label>
          <input type="number" className="form-control" value={reservationDetails.children} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Selected Transporter</label>
          <input type="text" className="form-control" value={reservationDetails.transporterId} readOnly />
        </div>
        <button type="submit" className="btn btn-primary">Confirm Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
