import { Link } from "react-router-dom";
import Header from "../component/Header";
import { products } from "../utils/mes-var";
import Sidebar from "../component/Sidebar";
import ProductCard from "../component/ProductCard";

function ProductsPage() {
  

  const productSortedByPrice = products.sort((product1, product2) => product1.price - product2.price);

  return (
    <>
      <Header pageTitle="Ma page sur les produits les moins chers"/>
      <Sidebar pageTitle2="vous consultez les produits" />
      <main>
        <h1>Les produits les moins chers pour les grosses pinces : </h1>

        {productSortedByPrice.map((productProps) => {
          return (
            <ProductCard productValue={productProps} />
          );
        })}
      </main>
    </>
  );
}

export default ProductsPage;
