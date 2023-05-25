import React from 'react'

function Card(props) {
  const handleClick = () => {}
  return (
    <div className="card" >
        <iframe width="560" height="315" src={props.film.postUrl} title={props.film.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{props.film.title}</h3> 
        <div className="card" onClick={handleClick}>
        {/* Contenu de la carte */}
        </div>
    </div>
  )
}

export default Card