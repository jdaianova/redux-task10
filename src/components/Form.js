import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/actions/actionsCreator';

export default function Form({ editFormVisibility, editTodo, cancelUpdate }) {
    const dispatch = useDispatch();
    const [serviceValue, setServiceValue] = useState('');
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        setEditValue(editTodo.todo);
    }, [editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let todoObj = {
            id: nanoid(),
            todo: serviceValue,
            completed: false
        };
        dispatch(addTodo(todoObj));
        setServiceValue('');
    };

    const editSubmit = (e) => {
        e.preventDefault();
        let editedObj = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(editedObj));
        cancelUpdate();
    }

    return (

        <>
            {editFormVisibility === false ? (
                <form
                    className='form-group custom-form'
                    onSubmit={handleSubmit}
                >
                    <label>введите цену</label>
                    <div className='input-and-btn'>
                        <input
                            className='form-control'
                            type='text'
                            required
                            value={serviceValue}
                            onChange={(e) => setServiceValue(e.target.value)}
                        />
                        
                        <button
                            className='btn btn-secondary btn-md'
                        >
                            save
                        </button>
                    </div>
                </form>
            ) : (
                <form
                    className='form-group custom-form'
                    onSubmit={editSubmit}
                >
                    <label>update todo</label>
                    <div className='input-and-btn'>
                        <input
                            className='form-control'
                            type='text'
                            required
                            value={editValue || ''}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                        <button
                            className='btn btn-secondary btn-md'
                        >
                            update
                        </button>
                    </div>
                    <button type="button" className='btn btn-primary btn-md back-btn'
                        onClick={cancelUpdate}>CANCEL</button>
                </form>
            )}
        </>
    )
};
