import React from "react";
import Banner from "../../../public/bannerr.jpg";

const Hero = () => {
  const backgroundImage = `url(${Banner})`;

  return (
    <div>
      <div
        className="hero min-h-screen rounded"
        style={{
          backgroundImage: backgroundImage,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">List Film</h1>
            <p className="mb-5">
              Website cari film adalah tempat terbaik untuk menemukan informasi
              dan ulasan tentang berbagai film. Temukan film-film terbaru, lihat
              daftar film populer, dan temukan semua yang Anda butuhkan untuk
              pengalaman sinema Anda.
            </p>

            <button className="btn btn-primary">Lihat Film</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
