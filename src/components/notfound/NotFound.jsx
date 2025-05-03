import React from 'react';
import "./NotFound.css"

const NotFound = () => {
  console.log("NotFound component rendered");
  return (
    <div className="not-found">
        <div className="not-found-title">
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Halaman yang Anda cari tidak ditemukan.</p>
        </div>
        <div className="not-found-paragraph">
            
        </div>
    </div>
  );
};

export default NotFound;