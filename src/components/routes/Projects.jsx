import React from 'react';
import { Carousel } from 'react-bootstrap';

const Projects = () => {
  return (
    <div className="proj">
      <h1 className="our-projects">Our Projects</h1>
      <Carousel>
        <Carousel.Item interval={10000000} className="project1">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project2">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project3">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project4">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project5">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project6">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project8">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project9">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project10">
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={10000000} className="project12">
          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
