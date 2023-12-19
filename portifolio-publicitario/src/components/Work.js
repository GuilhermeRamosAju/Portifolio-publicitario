import React, { useState } from 'react';
import styles from './Work.module.css';
import images from './images/images.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ items }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };
  return(
    <div className={styles.carouselContainer}>
        <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carouselItem">
            {item.type === 'image' ? (
              <img className={styles.carouselImage} src={item.source} alt={`Imagem ${index + 1}`} />
            ) : (
            <video className="carouselVideo" controls>
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
      { type: 'image', source: images.ceacTurista },
      { type: 'image', source: images.clubeCar1},
      { type: 'image', source: images.clubeCar2 },
      { type: 'image', source: images.clubeCar3 },
    ],
    2: [
      { type: 'image', source: 'url_da_imagem_4.jpg' },
      { type: 'image', source: 'url_da_imagem_5.jpg' },
      { type: 'image', source: 'url_da_imagem_6.jpg' },
    ],
    3: [
      { type: 'video', source: 'url_do_video_1.mp4' },
      { type: 'video', source: 'url_do_video_2.mp4' },
      { type: 'video', source: 'url_do_video_3.mp4' },
    ],
  };
  const showCarousel = (index) => {
    setCurrentCarousel(index);
    setCarouselVisible(true);
  };
  return (
    <>
    <div className={styles.workBg} id='work'>
      <div className={styles.workPannel}>
        <span>Escolha a área e descubra um pouco do meu trabalho</span>
        <div id={styles.buttonContainer}>
          <button onClick={() => showCarousel(1)}>Copywriter</button>
          <button onClick={() => showCarousel(2)}>Design</button>
          <button onClick={() => showCarousel(3)}>Videomake</button>
        </div>
      </div>
    </div>
        {carouselVisible && <Carousel items={carousels[currentCarousel]} />}
    </>
  );
};

export default Work;