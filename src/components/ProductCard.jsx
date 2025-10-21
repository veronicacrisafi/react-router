export default function ProductCard({ product }) {

    return (
        <>

            <div className="bg-light bg-gradient">
                <h2 className="text-center mb-5 p-5">
                    Product description
                </h2>
            </div>

            <div className="card col-4 p-3 justify-content-center align-items-center mx-auto text-center" style={{ marginTop: -70 }}>
                <img style={{ width: 200 }} src={product.image} alt="" />
                <section className="p-3">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">prezzo: {product.price}</p>
                    <p className="card-text">categoria: {product.category}</p>
                    <p className="card-text">valutazione: {product.rating.rate}</p>
                    <p className="card-text">conteggio: {product.rating.count}</p>
                </section>
            </div>

        </>
    )
}