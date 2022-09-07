import "./Modal.css";
import search from "../components/assets/modal-search.svg";

const Modal = (props) => {
  const inputVal = (e) => {
    props.setInputState(e.target.value);
  };

  const increaseNumber = () => {
    props.setNumber((prevNumber) => prevNumber + 1);
  };

  const decreaseNumber = () => {
    if (props.number <= 0) {
      return;
    } else {
      props.setNumber((prevNumber) => prevNumber - 1);
    }
  };

  return (
    <div className='overlay'>
      <div className='modal__content'>
        <div className='modal__bar'>
          <div className='modal__location' onClick={props.toggleLocation}>
            <h3>Location</h3>
            <input
              type='text'
              placeholder='Add Location'
              className='input'
              onChange={inputVal}
              value={props.inputState}
            />
          </div>
          <div className='modal__guest' onClick={props.toggleGuest}>
            <h3>Guests</h3>
            <span className='minus' onClick={decreaseNumber}>
              -
            </span>
            <span className='modal__number'>{props.number}</span>
            <span className='plus' onClick={increaseNumber}>
              +
            </span>
          </div>
          <div className='modal-search__btn'>
            <button className='modal__btn' onClick={props.onClick}>
              <img src={search} alt='...' className='modal__search' />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
