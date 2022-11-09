import React from 'react'
import ProductDisc from '../Components/ProductDisc';

const ShopDashboard = ({titulo}) => {

    console.log(titulo);

  return (
    <>
    <div>Bienvenidos al {titulo}</div>
    <ProductDisc></ProductDisc>
    </>
  )
}

export default ShopDashboard