import Carousel from "react-bootstrap/Carousel";
import { useFetch } from "../fetch";
import "../css/carousel.css";

export default function CardCarousel() {

const { data, isLoaded, error, fetchAgain } = useFetch(
    "http://localhost:3001/carte",
    "GET"
    );

  return (
    <>
        <Carousel touch="true" interval={null}>
            {data.map((value, index) => (
              <Carousel.Item key={index} onClick={() => window.location.href=`/movimenti/${value}`}>
                  <div className="card-image" style={{backgroundImage: `url(/images/card${index + 1}.png)`}}></div>
              </Carousel.Item>
            ))}
        </Carousel>
    </>
  );
}
