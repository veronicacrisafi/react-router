import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Mirage } from 'ldrs/react'
import PaginaErrore from "./PaginaErrore";



export default function Prodotto() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [errore, setErrore] = useState(false)
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
                if (res.data && res.data.id) {
                    setProduct(res.data)
                } else {
                    setErrore(true);
                }
            })
            .catch(error => {
                console.error(error);
                setErrore(true);
            })
    }

    if (errore) {
        return <PaginaErrore />
    } else if (product !== null) {
        return <ProductCard product={product} />
    } else {
        return (
            <div className="vh-100 text-center">
                <Mirage
                    size="100"
                    speed="2.5"
                    color="black"
                />
                <div>Loading...</div>
            </div>
        )
    }
}