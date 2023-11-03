import React from 'react'

function Product(props) {
    const { name, price, description } = props
    return (
        <>
            <h1>Product Details-</h1>
            <p><b>Name: </b>{name}</p>
            <p><b>Price: </b>{price}</p>
            <p><b>Description: </b>{description}</p>

        </>
    )
}
export default Product