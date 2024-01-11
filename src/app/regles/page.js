"use client"
import React, { useState } from 'react';
import Navbar from "src/components/Navbar/Navbar.js";
import rulesData from "../../data/rulesData.json";
import './regles.css';

const Regles = () => {
  const [searchRule, setSearchRule] = useState("");
  
  function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const filteredRules = Object.entries(rulesData[0]).filter(([key, description]) =>
  removeAccents(key.toLowerCase()).includes(removeAccents(searchRule.toLowerCase())) ||
  removeAccents(description.toLowerCase()).includes(removeAccents(searchRule.toLowerCase()))
);

  return (
    <main>
      <Navbar />
      <h1>Règles</h1>
      
      <section className='regle'>
        <div className="search">
          <input
            type='text'
            placeholder='Rechercher...'
            value={searchRule}
            onChange={(e) => setSearchRule(e.target.value)}
          />
        </div>
        <ul>
          {filteredRules.map(([key, description]) => (
            <li key={key}>
              <strong>{key} :</strong> {description}
            </li>
          ))}
        </ul>
      </section>
    </main>  
  );
};

export default Regles;