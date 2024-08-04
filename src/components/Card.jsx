
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
// import reviews from "../data";
const Card = ({review, index, setIndex }) => {
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(review?.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    if (index + 1 >= review?.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * review?.length);
    setIndex(randomIndex);
  }
  return (
    <div className="card">
      <div className="image">
        <img src={review?.image} alt="" />
      </div>
      <div className="name">
        <h4>{review?.name}</h4>
      </div>
      <div className="job">
        <h6>{review?.job}</h6>
      </div>
      <div className="FaQuoteLeft">
        <FaQuoteLeft />
      </div>
      <div className="text">
        <span>{review?.text}</span>
      </div>
      <div className="FaQuoteRight">
        <FaQuoteRight />
      </div>
      <div className="arrows">
        <button onClick={leftShiftHandler}>
          <FaAngleLeft />
        </button>
        <button onClick={rightShiftHandler}>
          <FaAngleRight />
        </button>
      </div>
      <div className="buttons">
        <button type="button" onClick={surpriseHandler}>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Card;
