import React, { useState } from 'react';
import '../experiment_styles/Modal.css'; // Assuming CSS for modal styles

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modal Title</h2>
        <p>This is a simple modal!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
