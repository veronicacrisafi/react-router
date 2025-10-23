import { useNavigate } from "react-router-dom"

export default function PaginaErrore() {
    const navigate = useNavigate()

    return (
        <>
            <h1 className="min-vh-100 text-center">404</h1>
            <button onClick={() => navigate('/prodotti')} >Home</button>
            <button onClick={() => navigate(-1)}>Torna indietro</button>
        </>
    )
}