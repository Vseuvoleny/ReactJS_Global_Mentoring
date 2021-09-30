import React from "react";
import Nav from "../../Components/Nav/Nav";
import pulp_fiction from "../../assets/images/pulp_fiction.png";
import avengers from "../../assets/images/avengers.png";
import bohemian from "../../assets/images/bohemian_phapsody.png";
import kill_bill from "../../assets/images/kill_bill.png";
import inception from "../../assets/images/inception.png";
import dogs from "../../assets/images/dogs.png";
import RedTriangle from "../../Elements/Icon/Icons/redTriangle/RedTriange";
import "./Main.scss";
import MovieList from "../../Components/MovieList/MovieList";
import Icon from "../../Elements/Icon/Icon";

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
            <RedTriangle viewBox="0 0 10 7" width="10" height="7" fill="none" />
          </span>
        </div>
      </div>
      <MovieList films={films} />
    </main>
  );
};

export default Main;
