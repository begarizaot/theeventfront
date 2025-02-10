import { ConfigProvider } from "antd";
import { AppRouter } from "./routers";
import { AuthProvider } from "./context";

function App() {
  return (
    <ConfigProvider theme={{
      components: {
        Segmented: {
          itemHoverColor: '#ffffff', // Color del texto en hover
        },
      },
    }}>
      <AuthProvider>
        <AppRouter />;
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
