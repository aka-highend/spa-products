import { Product } from "@/types/types";

interface Props {
  product: Product;
  onImageClick: () => void;
}

function ProductCard({ product, onImageClick }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100">
      <div className="aspect-[4/3] overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
            onClick={onImageClick}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            No Image
          </div>
        )}
      </div>
      <div className="p-4">
        <p
          className="text-base font-semibold text-gray-900 truncate"
          title={product.name}
        >
          {product.name}
        </p>
        <p className="text-xs text-gray-500">ID: {product.id}</p>
      </div>
    </div>
  );
}

export default ProductCard;
