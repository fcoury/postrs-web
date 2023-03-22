import "./App.css";
import Main from "./pages/Main";
import { AppStateProvider } from "./state/AppState";

function App() {
  return (
    <AppStateProvider>
      <div className="container">
        <Main />
      </div>
    </AppStateProvider>
  );
}

export default App;
