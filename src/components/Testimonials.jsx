import Card from "./Card";
import { useState } from "react";
const Testimonials = (props) => {
    let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  return (
      <div>
        <Card review={reviews[index]} index = {index} setIndex={setIndex} />
      </div>
  );
};

export default Testimonials;
