// J'importe la fonction useParams qui est propre au react router dom
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { products } from "../utils/mes-var";
import Sidebar from "../component/Sidebar";

function ProductPage() {
  // j'utilise la fonction useParams, qui me permet de récupérer un parametre dans l'url. Je nomme la variable comme le parametre déclarée pour la route dans App.js
  const { id } = useParams();


  // permet de convertir le type de id (chaine de caractères)
  // car récupérée dans l'url
  // vers un integer
  // il vaut mieux faire la conversion soit même
  // et comparer avec triple égal (strict)
  // plutôt que laisser JS faire la conversion et comparer avec double égal
  const idInt = parseInt(id);

  const productFound = products.find((product) => {
    return product.id === idInt;
  });

  return (
    <>
      <Header pageTitle="Ma page produit"/>
      <Sidebar pageTitle2={`Vous consultez : ${productFound.title}`}/>
      <main>
        {productFound ? (
          <article>
            <h1>Detail du produit</h1>
            <p>{productFound.title}</p>
            <p>{productFound.price}</p>
            <p>{productFound.description}</p>
            <p>{productFound.category}</p>
          </article>
        ) : (
          <p>Tu fais n'importe quoi Niels</p>
        )}
      </main>
    </>
  );
}

export default ProductPage;
