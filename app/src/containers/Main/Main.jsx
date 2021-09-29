import React from "react";
import Nav from "../../components/Nav/Nav";
import pulp_fiction from "../../assets/images/pulp_fiction.png";
import avengers from "../../assets/images/avengers.png";
import bohemian from "../../assets/images/bohemian_phapsody.png";
import kill_bill from "../../assets/images/kill_bill.png";
import inception from "../../assets/images/inception.png";
import dogs from "../../assets/images/dogs.png";
import RedTriangle from "../../assets/svg/redTriange.svg";
import "./Main.scss";
import MovieList from "../../components/MovieList/MovieList";
import Svg from "../../Elements/Svg/Svg";

const films = [
  {
    id: 1,
    image: pulp_fiction,
    name: "Pulp Fiction",
    date: "2004",
    type: "Action & Adventure",
  },
  {
    id: 2,
    image: bohemian,
    name: "Bohemian Rhapsody",
    date: "2003",
    type: "Drama, Biography, Music",
  },
  {
    id: 3,
    image: kill_bill,
    name: "Kill Bill: Vol 2",
    date: "2004",
    type: "Oscar winning Movie",
  },
  {
    id: 4,
    image: avengers,
    name: "Avengers: War of Infinity",
    date: "2004",
    type: "Action & Adventure",
  },
  {
    id: 5,
    image: inception,
    name: "Inception",
    date: "2003",
    type: "Action & Adventure",
  },
  {
    id: 6,
    image: dogs,
    name: "Reservoir dogs",
    date: "1994",
    type: "Oscar winning Movie",
  },
];

const Main = () => {
  return (
    <main className="main">
      <div className="hr"></div>
      <div className="filters__container">
        <Nav />
        <div className="filter">
          <span className="filter__status">sort by</span>
          <span className="filter__options">
            release date{" "}
            {/* <Svg>
              <RedTriangle />
            </Svg> */}
          </span>
        </div>
      </div>
      <MovieList films={films} />
    </main>
  );
};

export default Main;
