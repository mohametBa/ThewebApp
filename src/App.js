import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "../src/components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "../src/pages/index";
import Login from "./components/common/Login";
import RegisterClient from "./components/common/RegisterClient";
import RegisterTransporteur from "./components/common/RegisterTransporteur";
import Footer from "../src/components/common/Footer";
import TransporterList from "./pages/TransporteurList";
import UserProfil from "./components/profils/userProfil";
import TransporterProfil from "./components/profils/TransporteurProfil";
import Discussion from "./components/common/Discussion";


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
        <Route path="/profile/user" element={<UserProfil />} />
        <Route path="/profil/transporter" element={<TransporterProfil />} />
        <Route path="/transporters" element={<TransporterList />} />
        <Route path="/discussion/:transporterId" element={<Discussion />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
