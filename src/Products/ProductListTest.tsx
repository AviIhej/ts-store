import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

interface IProductListProps {
  title?: string;
  price?: number
  id?: string
}

interface Product {
  title: string;
  price: number;
  id: string;
}

const initialProductList = [
  { title: 'Gummmy bears', price: 23, id: '1' },
  { title: 'Candy Apple ', price: 45, id: '2' },
  { title: 'Laffy taffy', price: 10, id: '3' },
  { title: 'Fruit Snacks taffy', price: 5, id: '3' },
]

const IndvdList = styled.ul`
  margin: 0 auto;
  border: .3em solid black;
  list-style-type: none;
  width: 50%;
  height: auto;
`

interface Payload {
  text: string;
}

const ProductListTest: React.FC<IProductListProps> = ({ title, price, id }) => {

  // const [ products, setProducts ] = useState<Product[]>(initialProductList)
  // Generic saying we wither have a payload or null this tells typescript what is going to go into to the payload variable""
const [payload, setPayload] = useState<Payload | null>(null) //this tells t
 

useEffect(() => {
  fetch('/payload.json')
  .then(res => res.json()) //same as json.parse(turns json string in to an object)
  .then(data => setPayload(data))
}, []) //if this dependency array is empty, useEffect will only run when the dependency is loaded

  return (
    <div>
        {initialProductList.map(product => (
          <IndvdList>
                <li>{product.title}</li>
                <li>{product.price}</li>
                <li>{product.id}</li>
          </IndvdList>
          ))}

          <div>
            <p>
              {JSON.stringify(payload)}
            </p>
          </div>
          {/* <button onClick={() => setProducts(prevProducts => [{
            title: 'william',
            cost: 44,
            id: '22',
          }, ...prevProducts])}>Add Product</button> */}
    </div>
  )
}

export default ProductListTest