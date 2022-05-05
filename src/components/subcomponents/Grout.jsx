import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GroutCard from './GroutCard.jsx';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Grout = ({ grout }) => {
  return (
    <Carousel responsive={responsive}>
      { grout.map((item) => {
        return <GroutCard grout={item} />;
      }) }
    </Carousel>
  );
};

export default Grout;
