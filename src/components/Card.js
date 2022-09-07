import "./Card.css";

const Card = (props) => {
  return <div className='properties__card'>{props.children}</div>;
};
export default Card;
