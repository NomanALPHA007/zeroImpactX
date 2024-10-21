import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

//INTERNAL IMPORT
import "../styles/globals.css";
import { SOCAIL_MEDIA_Provider } from "../context/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon.png"
        />
        <title>@theblockchaincoders Social</title>
      </Head>
      <SOCAIL_MEDIA_Provider>
        <Component {...pageProps} />
        <Toaster />
      </SOCAIL_MEDIA_Provider>

      <script src="js/plugin.js"></script>
      <script src="js/lightbox.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
}
