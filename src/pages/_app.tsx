import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppTheme from "@/theme/AppTheme";
import { WithPrivateRoute } from "@/core/guards/validateSessionContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppTheme>
      <WithPrivateRoute value={{}} >
        <Component {...pageProps} />
      </WithPrivateRoute>
    </AppTheme>
  );
}
