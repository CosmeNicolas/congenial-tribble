import React from 'react'
import HomerBart  from './img/bartHomer.gif'

 const Hello = ({saludo}) => {
  return (
    <>
    <h1 className='text-center mt-5'>Hello {saludo}</h1>
    <img className='img-fluid' src={HomerBart} alt="bart-homero" />
    </>
  )
}

export default Hello;
