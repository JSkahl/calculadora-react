import { useState, useEffect } from 'react'
import axios from 'axios'

export default function About() {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
        <h1>About</h1>
        <hr />
        {
            products.map((product, index) => (
                <div key={index}>
                    <h2>{product.title}</h2>
                    <p>R${product.price}</p>
                </div>
            ))
        }
        </>
    )
}