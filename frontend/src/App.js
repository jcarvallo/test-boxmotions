import { Headers, Layout } from "./components";
import { Home, Report } from "./containers";
import { Router } from "@reach/router";
import { StateProvider, initialState, reducer } from "./context";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Headers />
      <Layout>
        <Router>
          <Home path="/" />
          <Report path="/reports" />
        </Router>
      </Layout>
    </StateProvider>
  );
}

export default App;
