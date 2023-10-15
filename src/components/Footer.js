import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';



export default function Footer() {
   
    const { pathname } = useLocation();
    console.log(pathname);
    if (pathname === `/success`) return null;
    else if (pathname === `/product`) return null;
    else if (pathname === `/checkout/:id`) return null;
    return (
    
    <MDBFooter bgColor='dark' className='text-center text-white text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for contact</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' contrast />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn outline color='light'>
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='http://www.linkedin.com/in/mohamed-washif'>
          Mohamed Washif
        </a>
      </div>
    </MDBFooter>
  );
};

export{ Footer };