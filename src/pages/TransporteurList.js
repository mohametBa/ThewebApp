import React, { useState, useEffect } from "react";
import axios from "axios";
import CommonHeading from "../components/common/CommonHeading";

export default function TransporterList() {
  const [transporters, setTransporters] = useState([]);

  useEffect(() => {
    const fetchTransporters = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/transporters");
        setTransporters(response.data);
      } catch (error) {
        console.error("There was an error fetching the transporters!", error);
      }
    };

    fetchTransporters();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <CommonHeading
          heading="Nos Transporteurs"
          title="Transporteur"
          subtitle="Trouvez votre"
        />
        <div className="row g-4">
          {transporters.map((transporter) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={transporter._id}>
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={transporter.photo} alt={`${transporter.nom} ${transporter.prenom}`} />
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{transporter.nom} {transporter.prenom}</h5>
                    <div className="ps-2">{transporter.ville}</div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3">
                      Véhicule: {transporter.vehicle}
                    </small>
                  </div>
                  <p className="text-body mb-3">{transporter.description}</p>
                  <div className="d-flex justify-content-between">
                    <a
                      className="btn btn-sm btn-primary rounded py-2 px-4"
                      href="/"
                    >
                      Contacter
                    </a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="/">
                      Voir Plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
