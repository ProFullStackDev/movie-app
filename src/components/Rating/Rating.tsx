import Image from "next/image";
import styles from "@/styles/Movie.module.scss";

const Rating = (props: { rating: string | undefined}) => {  
  let rating;
  if(props.rating === "N/A"){
    rating = 0;
  } else {
    rating = props.rating? Math.round( parseFloat( props.rating ) ): 0;
  }

  const star: number = Math.floor(rating / 2);
  const halfstar: number = rating % 2;
  const emptystar: number = 5 - star - halfstar;

  return (
    <div className={styles.rating}>
      {
        star !== 0 && new Array(star).fill(0).map((each, index) => (
          <Image alt="star" key={index} src="/images/star_fill.svg" width="25" height="25"/>
        ))
      }
      {
        halfstar == 1 ?<Image alt="halfstar" src="/images/star_half.svg" width="25" height="25"/>: ""
      }
      {
        emptystar !== 0 && new Array(emptystar).fill(0).map((each, index) => (
          <Image alt="emptystar" key={index} src="/images/star_empty.svg" width="25" height="25"/>
        ))
      }
    </div>
  )
}

export default Rating;