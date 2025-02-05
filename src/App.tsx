import { AppRouter } from "./routers";


function App({ ssrEvent }: { ssrEvent?: any }) {
  return (
    <AppRouter ssrEvent={ssrEvent} />
  );
}

export default App;
