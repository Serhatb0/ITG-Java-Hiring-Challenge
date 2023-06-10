import "@/styles/globals.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import tr from "../../lang/tr.json";
import en from "../../lang/en.json";
import { IntlProvider } from "react-intl";
import { Router, useRouter } from "next/router";
import { store } from "@/store/store";
import "nprogress/nprogress.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import nProgress from "nprogress";
const messages = {
  tr,
  en,
};

Router.events.on("routeChangeStart", () => {
  nProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  nProgress.done();
});

Router.events.on("routeChangeError", () => {
  nProgress.done();
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { locale } = useRouter();

  return (
    <SessionProvider session={session}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Provider store={store}>
          <Component {...pageProps} />
          <ToastContainer />
        </Provider>
      </IntlProvider>
    </SessionProvider>
  );
}
