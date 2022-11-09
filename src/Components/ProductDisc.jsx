import React from 'react'
import { useState } from 'react'

const ProductDisc = () => {

    const [productSelected, setProductSelected] = useState()
    const [discountSelected, setDiscount] = useState(1)

    const lista = [
        {id: 1, producto: "remera", precio: 2500},
        {id: 2, producto: "pantalon", precio: 4000},
        {id:3, producto: "camisa", precio: 3000}
    ]


    const found = lista.find(item => item.producto === productSelected)

    // console.log(productSelected);
  return (
    <div>
    
    <div>ProductDisc</div>
    {lista.map(item => (<li key={item.id}>{item.producto} - {item.precio}</li>))}
    <form>
        <select onChange={ (e) => setProductSelected(e.target.value)} >
            <option hidden selected defaultValue=''> - Seleccione un producto -</option>
            {lista.map(item => <option key={item.id} value={item.producto}>{item.producto}</option>)}
            
        </select>

        <select onChange={ (e) => setDiscount(e.target.value)}> 
                <option hidden selected defaultValue=''> - Selecciones un descuento -</option>
                <option value= {0.9}>10%</option>
                <option value={0.8}>20%</option>
                <option value={0.7}>30%</option>
        </select>
        <h3>Producto seleccionado   : {productSelected}</h3>
        <div>{found && found?.precio * discountSelected}</div>
        
        
    </form>
    </div>
  )
}

export default ProductDisc