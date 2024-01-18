import Image from "next/image";
import { Button } from "react-bootstrap";

import styles from "./searchButton.styles.module.scss";

const SearchBtn = ({ className, span }) => {
  return (
    <Button className={`${className} mt-4 fs-6 ${styles.btn}`}>
      <Image src="/assets/icons/searchIcon.png" width={13} height={13} />
      <span>{span}</span>
    </Button>
  );
};

export default SearchBtn;
