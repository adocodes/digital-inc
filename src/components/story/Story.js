import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-hero"></div>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-story">
            <h2>Our Story</h2>
            <div className="about-story-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident velit perspiciatis quibusdam sapiente consectetur quae
                aliquam? Hic, facilis? Inventore esse atque assumenda doloremque
                a nemo omnis, deserunt in deleniti obcaecati, nam culpa sed eum
                vero ullam aspernatur expedita consequuntur magnam! Eum, eaque
                eos? Debitis, incidunt?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                eligendi error eveniet iusto ut cumque illo, voluptas, accusamus
                totam, quod minima nesciunt cum autem ducimus? Fugiat nobis,
                enim quis quo natus maxime est veniam minus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
