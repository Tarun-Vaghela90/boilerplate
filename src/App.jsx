import React, { useState } from 'react';
import CustomForm from "./components/customForm/CustomForm";
import CustomModal from "./components/CustomModel/CustomModal";
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    setShowModal(false); // close modal after submit
  };

  return (
    <>
    <div className="center">
  <button onClick={() => setShowModal(true)}>Open Modal</button>

  <CustomModal
    show={showModal}
    onClose={() => setShowModal(false)}
    title="Hello from Modal"
    showClose={true}
  >
    <CustomForm onSubmit={handleFormSubmit} />
  </CustomModal>
</div>

    </>
  );
}

export default App;
