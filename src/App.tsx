import { ConfigProvider } from "antd";
import { AppRouter } from "./routers";
import { AuthProvider, CheckoutProvider } from "./context";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemHoverColor: "#ffffff", // Color del texto en hover
          },
        },
      }}
    >
      <AuthProvider>
        <CheckoutProvider>
          <AppRouter />
        </CheckoutProvider>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
