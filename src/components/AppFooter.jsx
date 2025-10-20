import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function AppFooter() {

    return (

        <>
            <footer className="bg-dark">
                <div className="container">
                    <div className="row py-4">
                        <div className="col">
                            <h5 className="text-light">FOLLOW US</h5>
                        </div>
                        <div className="col text-end">
                            <FontAwesomeIcon className="mx-2" icon={faFacebook} style={{ color: "#74C0FC", fontSize: "2rem" }} />
                            <FontAwesomeIcon className="mx-2" icon={faSquareInstagram} style={{ color: "#74C0FC", fontSize: "2rem" }} />
                            <FontAwesomeIcon className="mx-2" icon={faSquareXTwitter} style={{ color: "#74C0FC", fontSize: "2rem" }} />
                            <FontAwesomeIcon className="mx-2" icon={faYoutube} style={{ color: "#74C0FC", fontSize: "2rem" }} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}