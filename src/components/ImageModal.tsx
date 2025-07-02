import { useEffect } from "react";

interface Props {
  image: string;
  onClose: () => void;
}

function ImageModal({ image, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-md sm:max-w-3xl relative max-h-[90vh] overflow-auto">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={image}
          alt="Preview"
          className="w-full h-auto object-contain rounded"
        />
      </div>
    </div>
  );
}

export default ImageModal;
