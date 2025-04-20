import { AppRouter } from "./routers";
import { CardProvider, GlobalProvider } from "./provider";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  

  return (
    <Provider store={store}>
      <GlobalProvider>
        <CardProvider>
          <AppRouter />
        </CardProvider>
      </GlobalProvider>
    </Provider>
  );
}

export default App;
