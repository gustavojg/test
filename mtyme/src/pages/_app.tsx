import { ActivityProvider } from "@/context/ActivityContext";
import { UserProvider } from "@/context/UserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ActivityProvider>
        <Component {...pageProps} />
      </ActivityProvider>
    </UserProvider>
  );
}
