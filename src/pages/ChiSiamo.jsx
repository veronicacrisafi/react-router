import { Link, NavLink } from "react-router-dom";


export default function ChiSiamo() {

    return (
        <>
            <div className="container">
                <nav>
                    <Link to="/">Home Page</Link>
                    <NavLink to="/presentazione">Chi Siamo</NavLink>
                    <NavLink to="/prodotti">Prodotti</NavLink>
                </nav>

                <h1>Chi siamo?</h1>

                <p>Benvenuti nel nostro mini e-commerce! Siamo un'azienda giovane e con tanta voglia di fare!
                    Ci teniamo ad offrire ai nostri clienti prodotti di qualità con un'esperienza
                    di acquisto semplice e sicura.
                </p>
            </div>

        </>
    )
}