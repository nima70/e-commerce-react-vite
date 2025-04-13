import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCTS_URL_API } from "../constants";
import Spinner from "@/components/ui/spinner";
import { Separator } from "@radix-ui/react-separator";
import RatingSummary from "@/components/ui/RatingSummary";
import PurchaseCard from "@/components/PurchaseCard";
import { Product } from "@/types/product";
const ProductScreen = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(id);
        const res = await axios.get(`${PRODUCTS_URL_API}/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);
  if (isLoading) return <Spinner />;
  if (!product) return <h1>Product not found</h1>;
  return (
    <div className="p-4 bg-background flex flex-col md:flex-row ">
      <img src={product.image} />
      {/* <h1 className="text-2xl font-bold">{product.name}</h1> */}
      {/* <p className="text-lg">💵 Price: ${product.price}</p> */}
      {/* product description */}
      <div className="py-6 sm:px-8 space-y-5 ">
        <h1>{product.name}</h1>
        <Separator className="w-full mt-4 h-px bg-muted" />
        <RatingSummary
          rating={product.rating}
          numReviews={product.numReviews}
        />
        <Separator className="w-full mt-4 h-px bg-muted" />
        <span className="text-muted-foreground">Price: {product.price}</span>
        <Separator className="w-full mt-4 h-px bg-muted" />
        <p className="text-muted-foreground mt-8">{product.description}</p>
        <Separator className="w-full mt-4 h-px bg-muted" />
        <PurchaseCard
          onSubmit={null}
          price={product.price}
          countInStock={product.countInStock}
        />
      </div>
    </div>
  );
};

export default ProductScreen;
