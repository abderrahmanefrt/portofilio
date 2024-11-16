import React from 'react';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
      <Spotlight className='top-10 -left-full h-[80vh] w-[50vw]' fill='white' />
      <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vh]' fill='blue' />
      
      <div className='h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      
      </div>
      <div className="flex justify-center relative my-20">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-centerjustify-center'>
          <h2 className='uppercase tracking-widest text-ts text-center text-blue-100 
          max-w-80'>dynamic magic with NEXT.js</h2>
          <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="transforming Concept experience from ........."
          
          />
          <p className="text-center md:tracking-wider mb-4 md:text-lg lg:text-2xl">
            hi i am abdou,a Next.js devloper based in algeria
          </p>
          <a href="#about">
            <MagicButton
            title="Show MY work"
            icon={<FaLocationArrow />}
            position='right'
            />
          </a>
        </div>

      </div>
    </div>
  );
};
