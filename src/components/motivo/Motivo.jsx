import styles from "./Motivo.module.scss";

function Motivo({ isOpen, texto, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>×</button>
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default Motivo;
