"use client"
import React, { useState } from "react";
import unitsData from "../data/unitsData.json";
import Card from "@/components/Card/Card";

const Home = () => {
  const [dataUnits, setDataUnits] = useState(unitsData);
  const [searchText, setSearchText] = useState("")

  const filtreUnits = dataUnits.filter((unit) =>
    unit.name.toLowerCase().includes(searchText.toLowerCase()))
  
  return (
    <main>
      <section className="unites">
        <h2>Datasheets</h2>
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
    </main>
  )
}

export default Home;
