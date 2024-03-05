import { type AppType } from "next/dist/shared/lib/utils";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ToastContainer
        stacked
        className={"z-20"}
        bodyClassName={"z-30"}
        toastClassName={"z-30"}
        position="bottom-center"
        theme="dark"
        pauseOnFocusLoss={false}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
