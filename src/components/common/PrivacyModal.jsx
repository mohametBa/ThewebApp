import React, { useState } from 'react';
import Modal from 'react-modal';
import PrivacyPolicy from '../../utils/privacy'; // Assurez-vous que le chemin est correct

const PolicyModal = ({ isOpen, onRequestClose }) => {
    const privacyPolicy = new PrivacyPolicy();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Politique de Confidentialité"
        >
            <h2>{privacyPolicy.getTitle()}</h2>
            {privacyPolicy.getSections().map((section, index) => (
                <div key={index}>
                    <h3>{section.heading}</h3>
                    <p>{section.content}</p>
                    {section.listItems && (
                        <ul>
                            {section.listItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
            <button onClick={onRequestClose}>Fermer</button>
        </Modal>
    );
};

export default PolicyModal;
