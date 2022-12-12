import React from 'react';
import './Gallery.css';
import Dope1 from '../../assets/images/dope-1.jpeg';
import Dope2 from '../../assets/images/dope-2.jpeg';
import Dope3 from '../../assets/images/dope-3.jpg';
import Dope4 from '../../assets/images/dope-4.jpg';
import Dope5 from '../../assets/images/dope-5.jpg';
import Dope6 from '../../assets/images/dope-6.jpg';

const Gallery = () => {
  return (
    <div className="grow">
      <div className="container">
        <section className="image-gallery">
          <div className="gallery-item">
            <img src={Dope1} alt="Office" />
          </div>
          <div className="gallery-item">
            <img src={Dope2} alt="Desktop" />
          </div>
          <div className="gallery-item">
            <img src={Dope3} alt="Laptop" />
          </div>
          <div className="gallery-item">
            <img src={Dope4} alt="Coding" />
          </div>
          <div className="gallery-item">
            <img src={Dope5} alt="Gaming" />
          </div>
          <div className="gallery-item">
            <img src={Dope6} alt="Operational Environment" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
