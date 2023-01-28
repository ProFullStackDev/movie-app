import styles from "@/styles/Layout.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image alt="logo" src="/icon.png" width={40} height={40} />
      <span>MOVIE APP</span>
    </div>
  );
};

export default Header;
