import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import FilterContextProvider from "@/context/filterContext";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FilterContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </FilterContextProvider>
    </>
  );
}
