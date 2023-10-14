import React, { useEffect, useState } from "react";
import { fetchMovies } from "./api";
import Card from "./assets/components/Card";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Footer from "./assets/components/Footer";
const App = () => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      const movies = await fetchMovies();
      setMovieList(movies);
    };

    getMovieData();
  }, []);

  return (
    <div className="app lg:p-4">
      <Header/>
      <Hero movie={MovieList[0]} />
      <h1 className="text-3xl font-bold text-center p-8">Daftar Film</h1>
      <Card movies={MovieList} />
      <Footer/>
    </div>
  );
};

export default App;
