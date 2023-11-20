import { Link } from "react-router-dom";
import Header from "../component/Header";
import { products } from "../utils/mes-var";

function Home() {

  // je trie product par cat
  // je filtre par id

  const kitchenProducts = products.filter((product) => {
    return products.category === "cuisine";
  });

  kitchenProducts.sort((product1, product2) => new Date(product1.publicationDate) - new Date(product2.publicationDate));

  const lastPublishedKitchenProducts = kitchenProducts.slice(-3);

  const productSortedByPrice = products.sort((product1, product2) => product1.price - product2.price);
  const cheapestProducts = productSortedByPrice.slice(0, 3);

  return (
    <>
    {/* J'appel le param de ma fonction pour y changer le texte de la balise p qui est dans le component header.jsx*/}
      <Header pageTitle="Ma home page" />
      <main>
        <section>
          <h2>Les trois derniers produits cuisine : </h2>

          {lastPublishedKitchenProducts.map((product) => {
            return (
              <article>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                {/* Je link le bouton à la variable product et j'y récupère la propriété id pour y afficher x produits (ex : 7 = réfrigérateur) */}
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>
        <section>
          <h3>Produits les moins chers : </h3>
          {cheapestProducts.map((product) => {
            return (
              <article>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
