import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

TodoFeatureList.propTypes = {};

function TodoFeatureList(props) {
  const todoListInit = [
    { id: 1, title: 'Diablo', status: 'new' },
    { id: 2, title: 'Diablo 2', status: 'new' },
    { id: 3, title: 'Diablo 3', status: 'completed' },
    { id: 4, title: 'Diablo 4', status: 'completed' },
  ];

  const [todoList, setTodoList] = useState(todoListInit);
  const [params, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(() => {
    return params.get('status') || 'all';
  });

  useEffect(() => {
    setFilter(params.get('status') || 'all');
  }, [params]);

  const toggleTodo = (id) => {
    const newTodoList = [...todoList];
    const status = newTodoList[id].status;
    newTodoList[id].status = status === 'new' ? 'completed' : 'new';
    setTodoList(newTodoList);
  };

  const filterTodoList = todoList.filter((todo) => filter === 'all' || todo.status === filter);

  useEffect(() => {
    console.log('this is effect');
    return () => {
      console.log('clean effect');
      // Execute before the next effect or unmount.
    };
  }, [filter]);

  const updateFilter = (status) => {
    params.set('status', status);
    navigate({
      pathname: location.pathname,
      search: params.toString(),
    });
  };

  const handleSubmitFormTodo = (values) => {
    console.log(values);
    const newTodoList = [...todoList];
    newTodoList.push({
      id: new Date().getTime() + Math.random(),
      title: values?.title,
      status: 'new',
    });
    setTodoList(newTodoList);
  };

  return (
    <div>
      <TodoForm onSubmit={handleSubmitFormTodo} />
      <TodoList todoList={filterTodoList} onClickTodo={toggleTodo} />
      <br />
      <button onClick={() => updateFilter('all')}>Show All</button>
      <button onClick={() => updateFilter('completed')}>Show Completed</button>
      <button onClick={() => updateFilter('new')}>Show New</button>
    </div>
  );
}

export default TodoFeatureList;
