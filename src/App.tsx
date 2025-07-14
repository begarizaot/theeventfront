import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { AppRouter } from "./routers";
import { UserProvider, CardProvider, GlobalProvider } from "./provider";

import store from "./store";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPEKEY);

function App() {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <UserProvider>
          <CardProvider>
            <Elements stripe={stripePromise}>
              <AppRouter />
            </Elements>
          </CardProvider>
        </UserProvider>
      </GlobalProvider>
    </Provider>
  );
}

export default App;
