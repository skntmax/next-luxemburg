import "../styles/globals.css";
import "../public/assets/css/hp.css";
import "../public/assets/css/prd.css";
import "../public/assets/css/product_animation.css";
import "../styles/journeyandmap.css";
import React, { useState } from "react";
import Header from "@components/header";
import { getAllCatWiseProducts } from "../Actions/action";

function MyApp({ Component, pageProps, all_prd, data }) {
  const [all_main_cat_wise_prods, set_all_main_cat_wise_prods] = useState(data);

  return (
    <React.Fragment>
      <Header all_main_cat_wise_prods={all_main_cat_wise_prods} />

      <Component {...pageProps} />
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // Fetch data using Axios
  let { status, result } = await getAllCatWiseProducts();

  // Pass the data to the component as a prop
  return { data: result };
};

export default MyApp;
