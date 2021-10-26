import React from 'react'

interface ProductFormProps {}

interface Product {
    title: string
    cost: number
    id: string
}

const ProductForm = (props: ProductFormProps) => {
    return (
       <>
        <h2>Add game to the store</h2>
       </>
    )
}



export default ProductForm