import React from "react";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import axios from "axios";
import { PRODUCTS_URL_API } from "../constants";
import Spinner from "@/components/ui/spinner";
import ProductCard from "@/components/ProductCard";

function HomeScreen() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(PRODUCTS_URL_API);
        setProducts(res.data);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (isLoading) return <Spinner />;
  if (isError) return <div></div>;

  return (
    <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-5 p-5">
      {products?.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
}

export default HomeScreen;
