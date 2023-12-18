import React, { useState } from 'react';

const Carousel = ({ items }) => (
  <div className="carouselContainer">
    {items.map((item, index) => (
      <div key={index} className="carouselItem">
        {item.type === 'image' ? (
          <img className="carouselImage" src={item.source} alt={`Imagem ${index + 1}`} />
        ) : (
          <video className="carouselVideo" controls>
            <source src={item.source} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        )}
      </div>
    ))}
  </div>
);

const Work = () =>{
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [carouselVisible, setCarouselVisible] = useState(false);

  const carousels = {
    1: [
      { type: 'image', source: 'url_da_imagem_1.jpg' },
      { type: 'image', source: 'url_da_imagem_2.jpg' },
      { type: 'image', source: 'url_da_imagem_3.jpg' },
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
    <div>
      <span>Escolha a área e descubra um pouco do meu trabalho</span>
      <div id="buttonContainer">
        <button onClick={() => showCarousel(1)}>Botão 1</button>
        <button onClick={() => showCarousel(2)}>Botão 2</button>
        <button onClick={() => showCarousel(3)}>Botão 3</button>
      </div>

      {carouselVisible && <Carousel items={carousels[currentCarousel]} />}
    </div>
  );
};

export default Work;