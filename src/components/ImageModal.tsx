import { useEffect } from "react";
import styles from "../styles/image-modal.module.css";

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
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4"
      onClick={handleOverlayClick}
    >
      <div className={styles.imageModalContainer}>
        <button className={styles.modalCloseButton} onClick={onClose}>
          &times;
        </button>
        <img src={image} alt="Preview" className={styles.modalImage} />
      </div>
    </div>
  );
}

export default ImageModal;
