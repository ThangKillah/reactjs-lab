import { Route, Routes, Link, Navigate, useParams } from "react-router-dom";
import "./App.scss";
import TodoFeature from "./features/Todo";
import logo from "./logo.svg";

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

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
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Link className="App-link" to="/todos">
          Todos
        </Link>
      </header>
    </div>
  );
}

export default App;
