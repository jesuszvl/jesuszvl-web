import "../src/styles/globals.scss";

import { Outfit } from "next/font/google";
import { initializeAnalytics } from "../src/utils/analytics";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  subsets: ["latin"],
});

initializeAnalytics();

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
