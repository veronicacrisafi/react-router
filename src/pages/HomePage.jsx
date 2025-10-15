import { Link, NavLink } from "react-router-dom";


export default function HomePage() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home Page</Link>
                    <NavLink to="/presentazione">Chi Siamo</NavLink>
                    <NavLink to="/prodotti">Prodotti</NavLink>
                </nav>
            </header>

            <main>
                <h1 className="welcome-img">Welcome in my firts mini e-commerce!🛍️</h1>


            </main>

        </>
    )
}