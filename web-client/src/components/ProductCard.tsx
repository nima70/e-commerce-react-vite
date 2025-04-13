import React from "react";
import { Product } from "@/types/product";
import RatingSummary from "./ui/RatingSummary";
import { Link } from "react-router-dom";
import { PRODUCTS_URL_SCREEN } from "../constants";
function ProductCard(product: Product) {
  return (
    <Link to={`${PRODUCTS_URL_SCREEN}/${product.id}`}>
      <div className="border flex flex-col bg-background items-start  shadow-md  px-6 py-4 space-y-3 text-foreground rounded-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-200">
        <img src={product.image} className="rounded-md w-full h-auto" alt="" />
        <h3>{product.name}</h3>
        <RatingSummary
          rating={product.rating}
          numReviews={product.numReviews}
        />
        <span>${product.price}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
