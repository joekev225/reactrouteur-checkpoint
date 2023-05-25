import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = ({ films }) => {
  const { id } = useParams();
  const film = films.find(f => f.id === parseInt(id));

  return (
      <div className="cadre">
      <Link style={ {textDecoration: 'none', color: '#323232'}} to={'/'}><div className="goBack">{'<'}</div></Link>
          <iframe width="100%" height="300" src={film.link} title={film.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
          <h2>{film.title}</h2>
          <p>{film.description}</p>
      </div>
  );
};

export default MovieDetail;