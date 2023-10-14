import React from "react";

const Card = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
      {movies.map((movie) => (
        <div key={movie.id}>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {movie.original_title}
                <div className="badge badge-secondary">
                  {movie.vote_average}
                </div>
              </h2>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {movie.original_language}
                </div>
                <div className="badge badge-outline">
                  {movie.release_date}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
