import "../src/styles/globals.scss";

import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
