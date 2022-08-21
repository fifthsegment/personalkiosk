import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import "bootstrap";
import "./theme/soft-ui/perfectscrollbar.min.js";
//import "./theme/soft-ui/soft-ui.min.js";
import "./theme/soft-ui/soft-ui.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;