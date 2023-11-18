"use client"
import React from 'react';
import './Card.css'

const Card = ({ unit }) => {
  return (
    <div className="unit-card">
      <h3 className="unit-name">{unit.name}</h3>

      <p>Caractéristiques :</p>
      <ul>
        {Object.entries(unit.carac).map(([key, value]) => (
          <li key={key}>{`${key}: ${value}`}</li>
        ))}
      </ul>

      <p>Tirs :</p>
      <ul>
        {unit.tir.map((arme, index) => (
          <li key={index}>
            <p>{arme.name}</p>
            <p>{`Portée: ${arme.Portée}, A: ${arme.A}, CT: ${arme.CT}, F: ${arme.F}, PA: ${arme.PA}, D: ${arme.D}`}</p>
            <p>Spécialités: {arme.spé.join(', ')}</p>
          </li>
        ))}
      </ul>

      <p>Mêlée :</p>
      <ul>
        {unit.melee.map((arme, index) => (
          <li key={index}>
            <p>{arme.name}</p>
            <p>{`Portée: ${arme.Portée}, A: ${arme.A}, CC: ${arme.CC}, F: ${arme.F}, PA: ${arme.PA}, D: ${arme.D}`}</p>
            <p>Spécialités: {arme.spé.join(', ')}</p>
          </li>
        ))}
      </ul>

      <p>Aptitudes :</p>
      <ul>
        {Object.entries(unit.aptitudes).map(([key, value]) => (
          <li key={key}>{`${key}: ${value}`}</li>
        ))}
      </ul>

      <p>Mots-clés Faction: {unit.motclesfaction.join(', ')}</p>
      <p>Mots-clés: {unit.motscles.join(', ')}</p>
      <p>Coût: {unit.cout}</p>
    </div>
  )
}

export default Card