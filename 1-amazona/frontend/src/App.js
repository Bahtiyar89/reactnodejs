import logo from "./logo.svg";
import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">{product.price}</div>
                </div>
              </div>
            ))}

            <div className="card">
              <a href="product.html">
                <img className="medium" src="./images/p1.jpg" alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>Nike Slim Shirts</h2>
                </a>
                <div className="rating">
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
            <div className="card">
              <a href="product.html">
                <img className="medium" src="./images/p1.jpg" alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>Nike Slim Shirts</h2>
                </a>
                <div className="rating">
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
            <div className="card">
              <a href="product.html">
                <img className="medium" src="./images/p1.jpg" alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>Nike Slim Shirts</h2>
                </a>
                <div className="rating">
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
            <div className="card">
              <a href="product.html">
                <img className="medium" src="./images/p1.jpg" alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>Nike Slim Shirts</h2>
                </a>
                <div className="rating">
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                  <span>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
            <div className="card">
              <a href="product.html">
                <img className="medium" src="./images/p1.jpg" alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>Nike Slim Shirts</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star-half-o"></i>
                  </span>
                </div>
                <div className="price">$120</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
