import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import CheckmarkIcon from "../../assets/images/icons/checkmark.png";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data); //sets products as the data then uses products (with data) in products.map to generate the HTML
    });
  }, []);

  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
