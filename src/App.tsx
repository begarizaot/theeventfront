import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { AppRouter } from "./routers";
import { UserProvider, CardProvider, GlobalProvider } from "./provider";

import store from "./store";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPEKEY);

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// Plugins
dayjs.extend(utc);
dayjs.extend(timezone);

// Set default timezone
dayjs.tz.setDefault("America/Bogota");

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
