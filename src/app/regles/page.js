"use client"
import React, { useState } from 'react';
import Navbar from "src/components/Navbar/Navbar.js";
import rulesData from "../../data/rulesData.json";
import './regles.css';

const Regles = () => {
  const [searchRule, setSearchRule] = useState("");
  
  const filteredRules = Object.entries(rulesData[0]).filter(([key, description]) =>
    key.toLowerCase().includes(searchRule.toLowerCase()) ||
    description.toLowerCase().includes(searchRule.toLowerCase())
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