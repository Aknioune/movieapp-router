// import React, { useState } from 'react';

const Filter = ({ filterMovies,titleFilter,ratingFilter,setRatingFilter,setTitleFilter }) => {
  // const [titleFilter, setTitleFilter] = useState('');
  // const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    filterMovies();
  };

  return (
    <>
<div className='imgHeader'>
<img src="https://wallpapershome.com/images/pages/pic_h/24468.jpg"/>
</div>
  <form className="Filter" onChange={handleFilterSubmit}>
    <label className='filter-title' htmlFor="titleFilter"> Title: </label>
    <input type="text" id="titleFilter" value={titleFilter} onChange={handleTitleFilterChange} />
    <label className='filter-rating' htmlFor="ratingFilter"> Rating: </label>
    <input type="number" id="ratingFilter" min="0" max="10" value={ratingFilter} onChange={handleRatingFilterChange} />
  </form>
  </>
);
};

export default Filter;







