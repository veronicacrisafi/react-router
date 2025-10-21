import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Mirage } from 'ldrs/react'


export default function Prodotto() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const endpoint = `https://fakestoreapi.com/products/${id}`;
    console.log(endpoint);

    useEffect(() => {
        setTimeout(() => {
            fetchProdotto(endpoint)

        }, 3000)
    }, []);

    function fetchProdotto(endpoint) {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(error => console.error(error))
    }

    return (
        <>
            {product !== null ?
                (<ProductCard product={product} />)
                :
                (<div className="vh-100 text-center">
                    <Mirage
                        size="100"
                        speed="2.5"
                        color="black"
                    />
                    <div>Loading...</div>
                </div>
                )}
        </>
    )
}