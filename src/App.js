import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.scss";
import TodoFeature from "./features/Todo";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<TodoFeature />} />
          <Route path="/todos" element={<TodoFeature />} />
          <Route path="/todos" element={<TodoFeature />} />
        </Routes>
        <Link className="App-link" to="/todos">
          Todos
        </Link>
      </header>
    </div>
  );
}

export default App;
