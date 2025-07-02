interface Props {
  image: string;
  onClose: () => void;
}

function ImageModal({ image, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full relative">
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
