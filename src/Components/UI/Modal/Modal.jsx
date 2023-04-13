import styles from "./Modal.module.css";

export const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.modal];
  if (visible) {
    rootClasses.push(styles.open);
  }
  const rootContentClasses = [styles.modalContent];
  if (visible) {
    rootContentClasses.push(styles.open);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={rootContentClasses.join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
