import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import stays from "./stays.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Card from "./components/Card";
import star from "./components/assets/star.svg";

function App() {
  // States
  const [modal, setModal] = useState(false);
  const [inputState, setInputState] = useState("");
  const [number, setNumber] = useState(0);

  // Functions
  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };
  const closeModal = () => {
    setModal(false);
  };

  // Rendering
  return (
    <div className='App'>
      {modal && (
        <Modal
          onClick={closeModal}
          inputState={inputState}
          setInputState={setInputState}
          number={number}
          setNumber={setNumber}
          properties={stays}
        />
      )}
      <Header onClick={toggleModal} />
      <Main />
      <Card>
        {stays
          .filter((property) => {
            return inputState.toLowerCase() === ""
              ? property
              : property.city
                  .toLowerCase()
                  .includes(inputState.toLowerCase()) &&
                  number <= property.maxGuests;
          })
          .map((property) => {
            return (
              <div key={nanoid()}>
                <img src={property.photo} alt='...' className='card__img' />
                <div className='card'>
                  {property.host ? <p className='host'>SUPER HOST</p> : ""}
                  <p className='type'>
                    {property.type}{" "}
                    {property.beds ? <span> . {property.beds} beds</span> : ""}
                  </p>
                  <p className='rating'>
                    <img src={star} alt='...' className='star__img' />{" "}
                    {property.rating}
                  </p>
                </div>
                <h3 className='title'>{property.title}</h3>
              </div>
            );
          })}
      </Card>
      <Footer />
    </div>
  );
}

export default App;
