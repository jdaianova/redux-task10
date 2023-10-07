import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import ServicesList from './components/ServicesList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/actions/actionsCreator';

function App() {
  const services = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();

  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');
  
  const handleEditClick = (todo) => { 
    setEditFormVisibility(true);
    setEditTodo(todo);
   };

   const cancelUpdate = (todo) => { 
    setEditFormVisibility(false);
   };

  return (
    <div className="wrapper">
      <h1 className='text-center'>Услуги</h1>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo = {editTodo}
        cancelUpdate = {cancelUpdate}
      />
      <ServicesList
        editFormVisibility={editFormVisibility}
        handleEditClick={handleEditClick}

      />
      {services.length > 1 && (
        <button
          className='btn btn-danger btn-md delele-all'
          onClick={() => dispatch(deleteAll())}
        >УДАЛИТЬ ВСЕ</button>
      )}
    </div>
  );
}

export default App;