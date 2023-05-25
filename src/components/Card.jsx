import React from 'react'

function Card(props) {
  const handleClick = () => {}
  return (
    <div className="card" >
        <iframe width="100%" height="300" src={props.films.link} title={props.film.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        <h3>{props.films.title}</h3> 
        <div className="card" onClick={handleClick}>
        {/* Contenu de la carte */}
        </div>
    </div>
  )
}

export default Card