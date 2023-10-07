import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import { edit2 } from 'react-icons-kit/feather/edit2';
import { removeTodo } from '../redux/actions/actionsCreator';

export default function ServicesList({ handleEditClick, editFormVisibility }) {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.operationsReducer);

    return services.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {todo.todo}
                </p>
            </div>
            <div className='actions-box'>
                {editFormVisibility === false && (
                    <>
                        <span onClick={() => handleEditClick(todo)}><Icon icon={edit2} /></span>
                        <span onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash} /></span>
                    </>
                )}
            </div>
        </div>
    ))
};