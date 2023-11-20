
// J'importe les variable du react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductsPage from "./page/ProductsPage";
import ProductPage from "./page/ProductPage";

function App() {
  return (
    // Je déclare le browserrouter, avec à l'intérieur mes routes et leur URL associés (ex : mon /products sera lié à ProductsPage)
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
