"use client"
import React, { useState } from "react";
import unitsData from "../data/unitsData.json";
import Card from "@/components/Card/Card";

const Home = () => {
  const [dataUnits, setDataUnits] = useState(unitsData);

  return (
    <main>
      <section className="unites">
        <h2>Datasheets</h2>
        <ul className="unit-list">
          {dataUnits.map((unit, index) => (
          <li key={index}>
              <Card unit={unit} />
          </li>
        ))}
        </ul>

      </section>
    </main>
  )
}

export default Home;
