import React, { useState, useEffect } from 'react';
import { picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8 } from '../assets'
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';

function Picture() {
  const navigate = useNavigate();
  
  const pictures = [
    { Image: picture1, title: 'January 4, 2025', description: "Why that face? 😭"},
    { Image: picture2, title: 'January 4, 2024', description: "Ai huhuh 😂"},


  ]
  return (
    
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          {config.pictureTitle}
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description }, index) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText={`Picture ${index + 1}`}
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;
