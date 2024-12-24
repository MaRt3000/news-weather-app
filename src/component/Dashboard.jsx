import React from 'react';
import Nav from './Nav';
import Weather from './Weather';
import News from './News';


const Dashboard = () => {
  return (
    <div className='flex  flex-col mt-[70px] md:mt-0 lg:mt-0 '>
      <h1 className='text-purple-800  sm:text-sm md:text-[25px] py-11 text-center  '>DASHBOARD</h1>
      <Nav />
      <Weather />
      <News />
    </div>
      );
};

export default Dashboard;
