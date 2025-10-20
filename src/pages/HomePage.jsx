
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <FontAwesomeIcon icon={faHouse} style={{ color: "#74C0FC", fontSize: "4rem" }} />
                    <h1 className="mt-4 mb-4">Welcome in my firts mini e-commerce!</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card p-5">
                            <div className="card-title text-center">
                                Registrati!
                            </div>
                            <div className="card-body">
                                <form className="row">
                                    <div className="col-4 mb-3">
                                        <input className="form-control" type="text" placeholder="Cognome" />
                                    </div>
                                    <div className="col-4 mb-3">
                                        <input className="form-control" type="text" placeholder="Nome" />
                                    </div>
                                    <div className="col-4 mb-3">
                                        <input className="form-control" type="text" placeholder="Mail" />
                                    </div>
                                    <div className="col-4 mb-3">
                                        <input className="form-control" type="text" placeholder="recapito telefonico" />
                                    </div>
                                    <div className="col-4 mb-3">
                                        <input className="form-control" type="date" placeholder="Data di nascita" />
                                    </div>
                                    <div className="col-4 mb-3">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label ms-2">Consenso</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}