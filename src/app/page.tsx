"use client";

import Head from "next/head";
import { useEffect, useState } from "react";

import { ProductResponseItem, ImageGroup, Product } from "@/types/types";

import CompanyDescription from "../components/CompanyDescription";
import ProductGrid from "../components/ProductGrid";

import "../styles/styles.css";

function Home() {
  const apiUrl = "https://www.giovankov.com/api";

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productRes = await fetch(`${apiUrl}/product.json`);
      const imageRes = await fetch(`${apiUrl}/image.json`);

      const { data: productData }: { data: ProductResponseItem[] } =
        await productRes.json();
      const { data: imageData }: { data: ImageGroup[] } = await imageRes.json();

      const getImageById = (id: string): string => {
        const img = imageData.find((img) => img.id.includes(id));
        return img ? img.image : "";
      };

      const merged: Product[] = productData.map((item) => ({
        id: item.id,
        name: item.name ?? "(No Name)",
        image: getImageById(item.id),
      }));

      setProducts(merged);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Company Profile</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="min-h-screen px-4 py-12 bg-white text-gray-800 font-inter">
        <CompanyDescription />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Products
          </h2>
          <ProductGrid products={products} />
        </div>
      </main>
    </>
  );
}

export default Home;
