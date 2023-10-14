import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="bg-light min-h-screen py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold  mb-4 text-center">
            Tentang List Film
          </h1>
          <p className="text-xl max-w-prose mx-auto text-center">
            List Film adalah platform yang memungkinkan Anda menelusuri dan
            menemukan berbagai film dari berbagai genre, tahun rilis, dan bahasa.
            Kami menyediakan informasi lengkap tentang film-film terbaru dan
            klasik yang dapat Anda cari dan tonton.
          </p>
          <button className="btn btn-primary mt-6 mx-auto">Rate Website</button>
        </div>
      </div>
    </div>
  );
};

export default About;
