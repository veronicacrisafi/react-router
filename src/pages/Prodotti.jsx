import axios from "axios"
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
export default function Prodotti() {
    const [products, setProducts] = useState([])

    function fetchProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch((error) => console.error(error));
    }
    useEffect(fetchProducts, [])
    return (

        <div className="container">
            <nav>
                <Link to="/">Home Page</Link>
                <NavLink to="/presentazione">Chi Siamo</NavLink>
                <NavLink to="/prodotti">Prodotti</NavLink>
            </nav>
            <div className="row">
                {products.map((prodotto) =>
                    <div className="col-4 py-3" key={prodotto.id}>
                        <div className="card h-100">
                            <img src={prodotto.image} alt={prodotto.title} className="card-img-top" />
                            <section>
                                <h5 className="card-title">{prodotto.title}</h5>
                                <p className="card-text">prezzo: {prodotto.price}</p>
                                <p className="card-text">descrizione: {prodotto.description}</p>
                                <p className="card-text">categoria: {prodotto.category}</p>
                                <p className="card-text">valutazione: {prodotto.rating.rate}</p>
                                <p className="card-text">conteggio: {prodotto.rating.count}</p>

                            </section>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}