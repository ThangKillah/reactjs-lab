import productApi from 'api/productApi';
import 'App.scss';
import NotFound from 'components/NotFound';
import CounterFeature from 'features/Counter';
import TodoFeature from 'features/Todo';
import TodoDetailPage from 'features/Todo/page/TodoDetail';
import TodoFeatureList from 'features/Todo/page/TodoList';
import logo from 'logo.svg';
import { useEffect } from 'react';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

function HomePage() {
  return <p>This is home page</p>;
}

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await productApi.getAll();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="todos" element={<TodoFeature />}>
            <Route path="" element={<TodoFeatureList />} />
            <Route path=":id" element={<TodoDetailPage />} />
          </Route>
          <Route path="todos" element={<TodoFeature />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="counter" element={<CounterFeature />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Link className="App-link" to="/todos">
          Todos
        </Link>
        <Link className="App-link" to="/counter">
          Counter
        </Link>
      </header>
    </div>
  );
}

export default App;
