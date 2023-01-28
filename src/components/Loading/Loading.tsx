import { CSSProperties } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const loadingCSS: CSSProperties = {
  display: "block",
  margin: "auto",
  marginTop: "30vh",
};

const Loading = ( props: { loading: boolean } ) => {

  return (
    <PuffLoader
      color="#36d7b7"
      loading={props.loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      cssOverride={loadingCSS}
    />
  );  
};

export default Loading;
