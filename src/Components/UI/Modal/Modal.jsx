import styles from "./Modal.module.css";

export const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.Modal];
  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
