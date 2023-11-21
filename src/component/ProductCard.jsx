import { Link } from "react-router-dom";


function ProductCard ({productValue}) {
    return (
        <article>
                <h3>{productValue.title}</h3>
                <p>{productValue.price}</p>
                <Link to={`/products/${productValue.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
    )
}
export default ProductCard;