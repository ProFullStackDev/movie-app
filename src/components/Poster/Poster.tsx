import styles from "@/styles/Home.module.scss";
import Image from "next/image";

const Poster = (props: {
  imageLink: string | undefined;
  title: string | undefined;
}) => {
  return (
    <div className={styles.poster}>
      <Image
        alt="poster"
        src={props.imageLink ? props.imageLink : ""}
        width={300}
        height={250}
        priority
      />
      <div>{props.title}</div>
    </div>
  );
};

export default Poster;
