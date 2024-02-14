import './CountryCard.css'
import React from 'react'

export default function CountryCard({flag, name}) {
  return (
    <>
    <div className="countryCard" >
        <img className="flag" src={flag} alt="Flag of country" />
        <p>{name}</p>
    </div>
    </>
  )
}


