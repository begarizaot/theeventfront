import { AuthProvider, CheckoutProvider, LoadingProvider } from "./context";
import { AppRouter } from "./routers";

function App() {
  return (
    <LoadingProvider>
      <AuthProvider>
        <CheckoutProvider>
          <AppRouter />
        </CheckoutProvider>
      </AuthProvider>
    </LoadingProvider>
  );
}

export default App;
