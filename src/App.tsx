import { ConfigProvider, theme } from "antd";
import { AppRouter } from "./routers";
import { useTheme } from "./hooks";

function App() {
  const { theme: currentTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        components: {
          Segmented: {
            itemHoverColor: "#ffffff", // Color del texto en hover
          },
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
