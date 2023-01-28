import Header from "./Header";
import Footer from "./Footer";
import { Carter_One } from "@next/font/google";

const Carter = Carter_One({
  weight: "400",
  subsets: ["latin"],
  variable: '--carter-font',
});

const Layout = (props: { children?: any }) => {
  return (
    <div className={Carter.variable}>
      <Header />
        {props?.children}
      <Footer />
    </div>
  );
}

export default Layout;