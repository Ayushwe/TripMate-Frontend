import React from 'react';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import BenefitsPage from './BenefitsPage';

const Home = () => {
  return (
    <div className='bg-[url(./src/assets/Homepagebgimage.jpg)] bg-cover bg-center min-h-screen relative'>
      <Navbar />
      <div className='absolute inset-0 flex flex-col items-center justify-center -mt-20 lg:-mt-10 px-4 lg:px-0'>
        <div className='w-full max-w-5xl mx-auto text-center'>
          <h1 className='text-4xl lg:text-6xl font-extrabold text-white mb-4 lg:mb-6 leading-tight font-sans'>
            Explore Your Amazing City
          </h1>
          <SearchBox />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <BenefitsPage />
      </div>
    </div>
  );
}

export default Home;
