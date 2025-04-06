import { ConfigProvider, theme } from "antd";
import { AppRouter } from "./routers";
import { useTheme } from "./hooks";
import { CardProvider } from "./provider/CardProvider";

function App() {
  const { theme: currentTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      <CardProvider>
        <AppRouter />
      </CardProvider>
    </ConfigProvider>
  );
}

export default App;
