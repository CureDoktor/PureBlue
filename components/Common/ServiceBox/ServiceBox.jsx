import styles from "./ServiceBox.styles.module.scss";

const ServiceBox = () => {
  let icon = "/assets/pageThree/details/check.png";
  const serviceArr = [
    { name: "Safe and Effective", icon },
    { name: "Superior Confidence", icon },
    { name: "U.S.-made Medication", icon },
  ];
  return (
    <section className={styles.service}>
      {serviceArr.map((items, index) => (
        <div key={index} className={styles.serviceBox}>
          <img src={items.icon} alt="icon" />
          <p>{items.name}</p>
        </div>
      ))}
    </section>
  );
};

export default ServiceBox;
