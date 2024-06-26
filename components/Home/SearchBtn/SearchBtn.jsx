import Image from "next/image";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import styles from "./searchButton.styles.module.scss";

const SearchBtn = ({ className, span, name }) => {
  const router = useRouter();
  return (
    <Button
      // onClick={() => {
      //   router.push("/transition-page");
      // }}
      className={`${className} mt-4 fs-6 ${
        name == "explore"
          ? styles.explore
          : name == "not-explore"
          ? styles.notExplore
          : styles.btn
      }`}
    >
      <Image src="/assets/icons/searchIcon.png" width={13} height={13} />
      <span>{span}</span>
    </Button>
  );
};

export default SearchBtn;
