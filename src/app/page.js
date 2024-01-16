"use client"
import React, { useState } from "react";
import unitsData from "../data/unitsData.json";
import Card from "@/components/Card/Card";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
  const [dataUnits, setDataUnits] = useState(unitsData);
  const [searchText, setSearchText] = useState("")

  function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  const filtreUnits = dataUnits.filter((unit) =>
  removeAccents(unit.name.toLowerCase()).includes(removeAccents(searchText.toLowerCase()))
  )

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <main className="main">
      <Navbar />
      <section className="unites">
        <h1>Unités</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
        </div>

        

        <ul className="unit-list">
          {filtreUnits.map((unit, id) => (
          <li key={id} className="unit-cartes">
              <Card unit={unit} />
          </li>
        ))}
        </ul>

      </section>
      <div className="top" onClick={scrollToTop}>
        Scroll to Top
      </div>

    </main>
  )
}

export default Home;
