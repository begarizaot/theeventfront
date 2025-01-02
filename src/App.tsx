import { AppRouter } from "./routers";
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import { AuthProvider, CheckoutProvider, LoadingProvider } from "./context";
import store from "./store/index.ts";

function App() {
  return (
    <Provider store={store}>
      <PrimeReactProvider value={{ ripple: true, inputStyle: "outlined" }}>
        <LoadingProvider>
          <AuthProvider>
            <CheckoutProvider>
              <AppRouter />
            </CheckoutProvider>
          </AuthProvider>
        </LoadingProvider>
      </PrimeReactProvider>
    </Provider>
  );
}

export default App;
