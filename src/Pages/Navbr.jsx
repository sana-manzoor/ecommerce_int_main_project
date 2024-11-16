import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbr() {
  return (
    <>
      {/* Desktop Navbar */}
       {/* Desktop Navbar */}
       <div className='container-fluid'>
        <div className='d-flex justify-content-between align-items-center py-3'>
          {/* For larger screens */}
          <div className='d-none d-sm-flex justify-content-evenly w-100'>
            <span className='ft2'>
              <Link to={'/'} className='text-dark'>All</Link>
            </span>
            <span className='ft2'>
              <Link to={'/shoes'} className='text-dark'>Shoes</Link>
            </span>
            <span className='ft2'>
              <Link to={'/mob'} className='text-dark'>Mobile Phones</Link>
            </span>
            <span className='ft2'>
              <Link to={'/lady'} className='text-dark'>Ladies Wear</Link>
            </span>
            <span className='ft2'>
              <Link to={'/gents'} className='text-dark'>Gents Wear</Link>
            </span>
            <span className='ft2'>
              <Link to={'/kids'} className='text-dark'>Kids Wear</Link>
            </span>
            <span className='ft2'>
              <Link to={'/jwel'} className='text-dark'>Jewellery</Link>
            </span>
            <span className='ft2'>
              <Link to={'/elec'} className='text-dark'>Electronics</Link>
            </span>
          </div>
          
          {/* For smaller screens (Mobile View) */}
          <div className='d-flex d-sm-none w-100 flex-column text-center'>
            <span className='ft2 mb-2'>
              <Link to={'/'} className='text-dark'>All</Link>
            </span>
            <span className='ft2 mb-2'>
              <Link to={'/shoes'} className='text-dark'>Shoes</Link>
            </span>
            <span className='ft2 mb-2'>
              <Link to={'/mob'} className='text-dark'>Mobile Phones</Link>
            </span>
            <span className='ft2 mb-2'>
              <Link to={'/lady'} className='text-dark'>Ladies Wear</Link>
            </span>
            <span className='ft2 mb-2'>
              <Link to={'/gents'} className='text-dark'>Gents Wear</Link>
            </span>
            <span className='ft2 mb-2'>
              <Link to={'/kids'} className='text-dark'>Kids Wear</Link>
            </span>
            <span className='ft2 mb-2'>
              <Link to={'/jwel'} className='text-dark'>Jewellery</Link>
            </span>
            <span className='ft2 mb-2'>
              <Link to={'/elec'} className='text-dark'>Electronics</Link>
            </span>
          </div>
        </div>
      </div>

    
    </>
  );
}

export default Navbr;
