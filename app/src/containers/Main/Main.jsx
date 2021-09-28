import React from "react";
import Nav from "../../components/Nav/Nav";
import pulp_fiction from "../../assets/images/pulp_fiction.png";
import avengers from "../../assets/images/avengers.png";
import bohemian from "../../assets/images/bohemian_phapsody.png";
import kill_bill from "../../assets/images/kill_bill.png";
import inception from "../../assets/images/inception.png";
import dogs from "../../assets/images/dogs.png";
import "./Main.scss";

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
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.17339 0C0.319169 0 -0.141788 1.00184 0.413939 1.65057L4.23746 6.11398C4.63642 6.57971 5.35674 6.57992 5.75597 6.11442L9.58401 1.65101C10.1403 1.0024 9.67943 0 8.82494 0H1.17339Z"
                fill="#F65261"
              />
            </svg>
          </span>
        </div>
      </div>
      <section className="cards__container">
        <span>{films.length} movies found</span>
        <div className="card__list">
          {films.map((c) => (
            <div className="card__item" key={c.id}>
              <picture className="card__image">
                <img src={c.image} alt={c.name} />
              </picture>
              <div className="card__description">
                <div>
                  <span>{c.name}</span>
                  <span>{c.date}</span>
                </div>
                <span>{c.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
