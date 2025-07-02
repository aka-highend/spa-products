import { useState } from "react";
import dynamic from "next/dynamic";

import { Product } from "@/types/types";
import ProductCard from "./ProductCard";

const ImageModal = dynamic(() => import("./ImageModal"), { ssr: false });

interface Props {
  products: Product[];
}

function ProductGrid({ products }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onImageClick={() => setSelectedImage(product.image)}
          />
        ))}
      </div>
      <div suppressHydrationWarning>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </>
  );
}

export default ProductGrid;
