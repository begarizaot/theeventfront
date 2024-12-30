import { HelmetProvider } from "react-helmet-async";
import { AuthProvider, CheckoutProvider, LoadingProvider } from "./context";
import { AppRouter } from "./routers";

function App() {
  return (
    <HelmetProvider>
      <LoadingProvider>
        <AuthProvider>
          <CheckoutProvider>
            <AppRouter />
          </CheckoutProvider>
        </AuthProvider>
      </LoadingProvider>
    </HelmetProvider>
  );
}

export default App;
