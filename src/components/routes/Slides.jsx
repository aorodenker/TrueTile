import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slides = () => {
  return (
    <Carousel>
      <Carousel.Item interval={10000} className="carousel-item1">
        <Carousel.Caption>
          <h3>Our Mission</h3>
          <p>
            To thrill our customers with great design and value proposition driven
            by continueous improvements in tile creativity, innocation,
            efficiency, and customer service.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000} className="carousel-item2">
        <Carousel.Caption>
          <h3>Our Vision</h3>
          <p>
            Our vision is to offer a creative blend of products to our customers
            that can be used in interior,
            exterior, wall, floor, shower and pool installations.
            As we move forward and innovate, our endeavor is to make our
            manufacturing environment a safer place to work.
            We rely on the feedback and creativity of our team and our
            family of dealers in the creation of new sizes,
            patterns, colors, and textures.  While creating products that
            will stand the test of time,
            we want our customers to invest in beauty.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000} className="carousel-item3">
        <Carousel.Caption>
          <h3>Quality</h3>
          <p>
            Our goal is simply to be the best and to continually improve.
            This is accomplished through focused teamwork,
            pride in our work, quality controlled systems –
            and by hiring and educating the best people we
            can possibly find.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;
