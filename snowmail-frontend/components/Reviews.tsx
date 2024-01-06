import React from 'react'

// Projects Displayed
import SouryaPenneru from './user-reviews/SouryaPenneru';


const UserReviews = () => {
  return (
    <div className='flex flex-col relative h-screen top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <div className="w-full flex space-x-5 overflow-x-auto p-10 mt-8">
        <SouryaPenneru />
        <SouryaPenneru />
        <SouryaPenneru />
        <SouryaPenneru />
        <SouryaPenneru />
      </div>
    </div>
  );  
};

export default UserReviews