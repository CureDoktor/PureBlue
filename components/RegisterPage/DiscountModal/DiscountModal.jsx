import styles from "./DiscountModal.styles.module.scss";
const DiscountModal = ({ setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleClose}>
          <img src="/assets/registerPage/close.png" alt="close" />
        </button>
        <div className={styles.content}>
          <div className={styles.productImg}>
            <img src="/assets/registerPage/medicine.png" alt="Product" />
          </div>
          <div className={styles.discountText}>
            <h3>
              Your
              <span> $35 off </span>
              discount <br /> has been applied!
            </h3>
            <p>Includes free shipping</p>
            <div className={styles.btnContainer}>
              <button>
                <span> Proceed with my order</span>
                <img src="/assets/registerPage/share.png" alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
