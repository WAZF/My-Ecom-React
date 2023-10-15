import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader
  } from 'mdb-react-ui-kit';

export default function ProductCard(props) {
    const navigate = useNavigate()
  return (
    <MDBCard className='mt-3 cursor-point col-lg-4 col-md-4 col-sm-4 container justify-content-center' 
    style={{width:300}} 
    role='button' 
    onClick={
    () => navigate(`/product/${props.id}`)
        }>
        <div className='mt-2'>
            <img src={props.thumbnail} 
            height={150} width={180} 
            alt={props.title} 
            className='border-radius-9' />

        </div>
        <MDBCardBody className='card-body'>
            <MDBCardHeader className='card-title'>{props.title}</MDBCardHeader>
            <h6 className='mt-2'>Price:{`$${props.price}`}</h6>
            <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
            <h6 className='mt-2'>Rating: {props.rating}</h6>
            <div>
                {props.stock >0 ? <button className='btn btn-outline-success'>Available</button> : <button className='btn btn-outline-danger'>Out of stock</button>}
            </div>

        </MDBCardBody>
    </MDBCard>
  );
}
