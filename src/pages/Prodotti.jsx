import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouriteContext from "../context/FavouriteContext";


export default function Prodotti() {
    const [products, setProducts] = useState([])
    const { toggleFavourite, isFavourite } = useContext(FavouriteContext)

    function fetchProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch((error) => console.error(error));
    }
    useEffect(fetchProducts, [])
    return (
        <div className="container">
            <div className="row">
                {products.map((prodotto) =>
                    <div className="col-3 py-3" key={prodotto.id}>
                        <div className="card h-100">
                            <Link to={`/prodotti/${prodotto.id}`}>
                                <img src={prodotto.image} alt={prodotto.title} className="card-img-top" />

                            </Link>
                            <section className="p-3">
                                <Link to={`/prodotti/${prodotto.id}`} className="text-decoration-none text-dark-emphasis">
                                    <h5 className="card-title">{prodotto.title}</h5>

                                </Link>
                                <p className="card-text">prezzo: {prodotto.price} €</p>
                                <p className="card-text">categoria: {prodotto.category}</p>
                                <p className="card-text">valutazione: {prodotto.rating.rate}</p>
                                <p className="card-text">conteggio: {prodotto.rating.count}</p>
                            </section>
                            <span onClick={() => toggleFavourite(prodotto.id)}>
                                {isFavourite(prodotto.id) ? '❤️' : '🤍'}
                            </span>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}