import React, { useState } from 'react';
import styles from './Work.module.css';
import images from './images/images.js';
import videos from './videos/videos.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ items }) => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };
  return(
    <div className={styles.carouselContainer}>
        <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            {item.type === 'image' ? (
              <img className={styles.carouselImage} src={item.source} alt={`Imagem ${index + 1}`} />
            ) : (
            <video className={styles.carouselVideo} controls>
              <source src={item.source} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            )}
          </div>
        ))}
      </Slider>
    </div>
  )
};

const Work = () =>{
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [carouselVisible, setCarouselVisible] = useState(false);

  const carousels = {
    1: [
      { type: 'image', source: images.desing1 },
      { type: 'image', source: images.desing2 },
      { type: 'image', source: images.desing3 },
      { type: 'image', source: images.desing4 },
      { type: 'image', source: images.desing5 },
      { type: 'image', source: images.desing6 },
      { type: 'image', source: images.desing7 },
      { type: 'image', source: images.desing8 },
    ],
    2: [
      { type: 'image', source: images.copy1 },
      { type: 'image', source: images.copy2 },
      { type: 'image', source: images.copy3 },
      { type: 'image', source: images.copy4 },
      { type: 'image', source: images.copy5 },
      { type: 'image', source: images.copy6 },
      { type: 'image', source: images.copy7 },
      { type: 'image', source: images.copy8 },
      { type: 'image', source: images.copy9 },
    ],
    3: [
      { type: 'video', source: videos.video1 },
      { type: 'video', source: videos.video2 },
      { type: 'video', source: videos.video3 },
      { type: 'video', source: videos.video4 },
      { type: 'video', source: videos.video5 },
      { type: 'video', source: videos.video6 },
      { type: 'video', source: videos.video7 },
      { type: 'video', source: videos.video8 },
      { type: 'video', source: videos.video9 },
      { type: 'video', source: videos.video10 },
      { type: 'video', source: videos.video11 },
      { type: 'video', source: videos.video12 },
      { type: 'video', source: videos.video13 },
      { type: 'video', source: videos.video14 },
      { type: 'video', source: videos.video15 },
      { type: 'video', source: videos.video16 },
      { type: 'video', source: videos.video17 },
    ],
  };
  const showCarousel = (index) => {
    setCurrentCarousel(index);
    setCarouselVisible(true);
    setTimeout(() => window.scrollTo({
      top: 800,
      left: 0,
      behavior: "smooth",
    }), 100)
  };
  return (
    <>
    <div className={styles.workBg} id='work'>
      <div className={styles.workPannel}>
        <span>Escolha a área e descubra um pouco do meu trabalho</span>
        <div id={styles.buttonContainer}>
          <button onClick={() => showCarousel(1)}>Design</button>
          <button onClick={() => showCarousel(2)}>Copywriter</button>
          <button onClick={() => showCarousel(3)}>Videomake</button>
        </div>
      </div>
    </div>
        {carouselVisible && <Carousel items={carousels[currentCarousel]} />}
    </>
  );
};

export default Work;