import React, { useState, useEffect } from "react";
import {db} from "../firebase";


function Test () {
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(false)

    const ref = db.collection('product');

    function getProducts() {
        setLoading(true)
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setProducts(items)
            setLoading(false)
        })
    }

    useEffect(() => {
        getProducts()
    } , [] )


    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )

}

export default Test