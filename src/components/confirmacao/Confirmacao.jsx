import styles from "./Confirmacao.module.scss";

function Confirmacao({ isOpen, frase, textoBotaoConfirmar, textoBotaoCancelar, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
            <p>{frase}</p>
            <div className={styles.buttons}>
            <button onClick={onCancel} className={styles.cancelButton}>
                {textoBotaoCancelar}
            </button>
            <button onClick={onConfirm} className={styles.confirmButton}>
                {textoBotaoConfirmar}
            </button>
            </div>
        </div>
        </div>
    );
}

export default Confirmacao;
