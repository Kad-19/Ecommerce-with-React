import React from "react";

import "./FeaturedProducts.css";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <div className="featured_products">
      <h2>Featured Products</h2>

      <div className="align_center featured_products_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
