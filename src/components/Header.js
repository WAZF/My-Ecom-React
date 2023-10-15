import React from 'react';
import { useNavigate } from 'react-router-dom';

import MyImage from './lg.png';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Header() {
     const navigate = useNavigate()
  return (

    <MDBNavbar className='p-3 bg-primary text-white fw-bolder bg-opacity-10 '>
      <MDBContainer fluid className='row justify-content-center pt-2 pb-1'>
      <MDBNavbarBrand href='#'>
      <img  className='square rounded-9'
              src={MyImage}
              height='70'
              alt=''
              loading='lazy'
            />
        <h3>MY E-COM</h3></MDBNavbarBrand>
        
            <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
                <button type='button' className='btn btn-primary me-4' onClick={() => navigate('/')}>Home</button>
                <input icon='search' className='form-control justify-content-center' type='search' placeholder='search..' />
                <button className='btn btn-primary ms-3' onClick={() => navigate('/cart')}>Cart</button>
            </div>
        </MDBContainer>
    
    
    </MDBNavbar>
  )
}
