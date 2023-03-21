import "./App.css";
import { AppStateProvider } from "./AppState";
import Main from "./pages/Main";

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
