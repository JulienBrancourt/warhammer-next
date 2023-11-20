"use client"
import React from 'react';
import './Card.css'

const Card = ({ unit }) => {
  const ordreCaracteristiques = ["M", "E", "Svg", "PV", "CD", "CO"]

  return (
    <div className="unit-card">
      <h3 className="unit-name">{unit.name}</h3>

      <table>
        <caption>Caractéristiques</caption>
        <thead>
          <tr>
            {ordreCaracteristiques.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {ordreCaracteristiques.map((key) => (
              <td key={key}>{unit.carac[key]}</td>
            ))}
          </tr>
        </tbody>
      </table>

      {unit.tir.length > 0 ? (
        <div className='table-container'>
        <table>
          <caption>Tir</caption>
          <thead>
            <tr>
              {Object.keys(unit.tir[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {unit.tir.map((arme, index) => (
              <tr key={index}>
                {Object.values(arme).map((value, subIndex) => (
                  <td key={subIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
          </table>
          </div>
      ) : (
        <p>Aucune arme de tir.</p>
      )}

      {unit.melee.length > 0 ? (
        <div className='table-container'>
          <table>
            <caption>CC</caption>
            <thead>
              <tr>
                {Object.keys(unit.melee[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {unit.melee.map((arme, index) => (
                <tr key={index}>
                  {Object.values(arme).map((value, subIndex) => (
                    <td key={subIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
            </table>
          </div>
      ) : (
        <p>Aucune arme de tir.</p>
      )}

      <div className='zone-text'>

        {unit.options.length > 0 ? (
          <div>
            <p className='options'>Options</p>
            <ul>
              {unit.options.map((key) => (
                <li key={key}>{key}</li>
              ))}
            </ul>
          </div>
        ) : ("")
        }

        <p className='aptitudes'>Aptitudes</p>
        <ul>
          {Object.entries(unit.aptitudes).map(([key, value]) => (
            value.length > 1 ? (
              <li key={key}>-{`${key} : ${value}`}</li>
            ) : (
              <li key={key}>-{key}</li>
            )
          ))}
        </ul>

        <p className='part'>Mots-clés Faction: {unit.motclesfaction.join(', ')}</p>
        <p>Mots-clés: {unit.motscles.join(', ')}</p>
        <p className='part'>Coût: {unit.cout} pts</p>
        </div>
      </div>
  )
}

export default Card