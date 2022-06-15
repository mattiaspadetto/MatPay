import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useFetch } from "../fetch";
import "../css/carousel.css";
import { useNavigate } from "react-router-dom";

export default function CardCarousel() {
  const { data, isLoaded, error, fetchAgain } = useFetch(
    "http://localhost:3001/carte",
    "GET"
  );

  const navigate = useNavigate();

  return (
    <>
      <Carousel touch="true" interval={null}>
        {data.map((value, index) => (
          <Carousel.Item
            key={index}
            onClick={() => {
              navigate(`/movimenti/${value.name}`);
            }}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(/images/card${index + 1}.png)` }}
            ></div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
