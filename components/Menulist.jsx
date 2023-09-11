import React from 'react';

const FoodList = ({ onClick }) => {
    return (
    <>
        <button
        type='button'
        onClick={onClick}
        className='display:flex font-bold font-satoshi m-4'
      >
        Food
      </button>
    </>
    );
  };

  const BoozeList = ({ onClick }) => {
    return (
    <>
      <button
        type='button'
        onClick={onClick}
        className='display:flex font-bold font-satoshi m-4'
      >
        Drink
      </button>
    </>
    );
  };

  const WeedList = ({ onClick }) => {
    return (
    <>
      <button
        type='button'
        onClick={onClick}
        className='display:flex font-bold font-satoshi m-4'
      >
        Cannabis
      </button>
    </>
    );
  };

  export { FoodList, BoozeList, WeedList };