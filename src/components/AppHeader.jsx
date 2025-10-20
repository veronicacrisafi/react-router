import { NavLink } from "react-router-dom"

export default function AppHeader() {

    return (
        <header className="bg-dark p-4 mb-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-8">
                        <nav>
                            <NavLink className="text-decoration-none  text-light ms-2" to="/">Home Page</NavLink>
                            <NavLink className="text-decoration-none text-light ms-2" to="/presentazione">Chi Siamo</NavLink>
                            <NavLink className="text-decoration-none  text-light ms-2" to="/prodotti">Prodotti</NavLink>
                        </nav>
                    </div>
                    <div className="col-4">
                        <search>
                            <form className="d-flex">
                                <input
                                    type="search"
                                    className="form-control me-2"
                                    placeholder="Cerca..."
                                />
                                <button className="btn btn-outline-light" type="submit">
                                    Cerca
                                </button>
                            </form>
                        </search>
                    </div>
                </div>
            </div>
        </header>
    )
}