import { useState } from "react";

import { Product } from "@/types/types";

import ProductCard from "./ProductCard";
import ImageModal from "./ImageModal";

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
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

export default ProductGrid;
