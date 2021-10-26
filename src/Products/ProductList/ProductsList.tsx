import React, { useState } from 'react'

interface ProductListProps {
  title?: string;
  price?: number;
  id?: string;
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

export const ProductList: React.FC<ProductListProps> = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProduct] = useState<Product[]>(initialProductList)

  return (
    <div>
      {products?.map(product => (<p>{product.title}</p>))}

      <button onClick={() => setProduct(prevProducts => [
        {
          title: 'william',
          price: 1000000000000,
          id: '223'
        }, ...prevProducts
      ])}>Add Product</button>
    </div>
  )
}

export default ProductList