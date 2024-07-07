'use client';

import React, { useState } from 'react';

const optionsData = [
  
  {
    background: 'url(/images/black.png)',
    icon: 'fas fa-walking',
    main: 'El Hierro',
    sub: 'Un continente en miniatura',
  },
  {
    background: 'url(/images/white.png)',
    icon: 'fas fa-walking',
    main: 'Fuerteventura',
    sub: 'Infinidad de playas sinfin',
  },
  {
    background: 'url(/images/yellow.png)',
    icon: 'fas fa-walking',
    main: 'Gran Canaria',
    sub: 'Roque nublo por bandera',
  },
  {
    background: 'url(/images/blue.png)',
    icon: 'fas fa-walking',
    main: 'La Gomera',
    sub: 'Corazón de laurisilva',
  },
  {
    background: 'url(/images/snow.png)',
    icon: 'fas fa-walking',
    main: 'Tenerife',
    sub: 'De la cumbre a la costa',
  },
  {
    background: 'url(/images/indian.png)',
    icon: 'fas fa-walking',
    main: 'La Graciosa',
    sub: 'Pequeño paraiso en la tierra',
  },
  {
    background: 'url(/images/cyan.png)',
    icon: 'fas fa-walking',
    main: 'La Palma',
    sub: 'Un espacio de contrastes',
  },
  {
    background: 'url(/images/orange.png)',
    icon: 'fas fa-walking',
    main: 'Lanzarote',
    sub: 'Pura esencia volcánica',
  },
  
];

const Options: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(99999);

  return (
    <div 
        className=" 
            flex 
            flex-row
            justify-center 
            items-center
            cursor-pointer
            m-3
          "
        >
      <div 
        className="
            relative
            flex 
            flex-wrap 
            md:flex-nowrap 
            items-stretch 
            w-full 
            max-w-[1250px] 
            h-auto 
            md:h-[340px] 
            overflow-hidden
          "
        >
        {optionsData.map((option, index) => (
          <div
            key={index}
            className={`
                    relative 
                    overflow-hidden
                    transition-all
                    ease-linear
                    duration-200
                    flex-grow
                    mx-1
                    ${activeIndex === index 
                        ? 'flex-grow-[4.4] scale-100 max-w-[10] md:rounded-[40px]' 
                        : 'flex-grow-[1] md:rounded-[40px]'}
                `}
            style={{ backgroundImage: option.background }}
            onClick={() => setActiveIndex(index)}
            >
            <div
              className={`
                    absolute 
                    flex
                    items-center
                    right-0 
                    transition-all 
                    duration-500 
                    ease-out 
                    ${activeIndex === index ? 'bottom-[20px] left-[20px]' : 'bottom-[10px] left-[10px]'}
                `}
              >
              <div 
                className="
                    flex items-center 
                    justify-center 
                    w-[40px] 
                    h-[40px] 
                    rounded-full
                    bg-yellow-400
                    text-black
                  "
                >
                <i className={option.icon}></i>
              </div>
              <div 
                className="
                    flex 
                    flex-col 
                    justify-center 
                    ml-[20px]
                    text-yellow-400
                    whitespace-pre
                  "
                >
                <div
                  className={`
                        relative 
                        transition-all 
                        duration-500 
                        ease-out
                        ${activeIndex === index ? 'left-0 opacity-100' : 'left-[20px] opacity-0'}
                    `}
                  >
                  <div 
                    className="
                        font-bold 
                        text-[1.2rem]
                      "
                    >
                        {option.main}
                    </div>
                  <div 
                    className="
                        transition-delay-100
                      "
                    >
                        {option.sub}
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;

// const optionsData = [
// {
  //   background: 'url(https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100)',
  //   icon: 'fas fa-walking',
  //   main: 'El Hierro',
  //   sub: 'Un continente en miniatura',
  // },
  // {
  //   background: 'url(https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100)',
  //   icon: 'fas fa-snowflake',
  //   main: 'Fuerteventura',
  //   sub: 'Infinidad de playas sinfin',
  // },
  // {
  //   background: 'url(https://images.unsplash.com/photo-1511800453077-8c0afa94175f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100)',
  //   icon: 'fas fa-tree',
  //   main: 'Gran Canaria',
  //   sub: 'Roque nublo por bandera',
  // },
  // {
  //   background: 'url(https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100)',
  //   icon: 'fas fa-tint',
  //   main: 'La Gomera',
  //   sub: 'Corazón de laurisilva',
  // },
  // {
  //   background: 'url(https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100)',
  //   icon: 'fas fa-sun',
  //   main: 'Lanzarote',
  //   sub: 'Pura esencia volcánica',
  // },
  // {
  //   background: 'url(https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100)',
  //   icon: 'fas fa-sun',
  //   main: 'La Graciosa',
  //   sub: 'Pequeño paraiso en la tierra',
  // },
  // {
  //   background: 'url(https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100)',
  //   icon: 'fas fa-sun',
  //   main: 'La Palma',
  //   sub: 'Un espacio de contrastes',
  // },
  // {
  //   background: 'url(https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100)',
  //   icon: 'fas fa-sun',
  //   main: 'Tenerife',
  //   sub: 'Omnipresente Teide',
  // },
// ];