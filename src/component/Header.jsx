import { Link } from "react-router-dom";
// Je donne un param à la fonction
function Header({pageTitle}) {



  return (

    <header>
      <img
        src="https://www.zarla.com/images/zarla-lectrodomus-1x1-2400x2400-20220705-x44pr4y4bq86kgcbw36t.png?crop=1:1,smart&width=250&dpr=2"
        alt="electro menager"
      />
      {/* Je met mon paramètre dans ma balise p, je pourrais ensuite changer le texte à ma guise en l'appelant dans mes autres pages */}
      <p> {pageTitle} </p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
