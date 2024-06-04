import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Booking from "./pages/BookingPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import Room from "./pages/RoomPage";
import Services from "./pages/ServicesPage";
import Team from "./pages/TeamPage";
import Testimonial from "./pages/TestimonialPage";
import Login from "./components/common/Login";
import RegisterClient from "./components/common/RegisterClient";
import RegisterTransporteur from "./components/common/RegisterTransporteur";
import TransporterList from "./pages/TransporteurList";
import UserProfil from "./components/profils/userProfil";
import TransporterProfil from "./components/profils/TransporteurProfil";
import Discussion from "./components/common/Discussion";
import Reservation from "./components/common/Reservation";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/register-transporteur" element={<RegisterTransporteur />} />
        <Route path="/profile/user" element={<PrivateRoute element={UserProfil} />} />
        <Route path="/profile/transporter" element={<PrivateRoute element={TransporterProfil} />} />
        <Route path="/transporters" element={<TransporterList />} />
        <Route path="/discussion/:transporterId" element={<PrivateRoute element={Discussion} />} />
        <Route path="/reservation" element={<PrivateRoute element={Reservation} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
