import {
    ADD_TODO,
    DELETE_ALL,
    REMOVE_TODO,
    UPDATE_TODO
} from "../actions/actionsTypes";

const initialState = [
    { id: 1, todo: 'Buy Laptop', completed: false },
    { id: 2, todo: 'Master Redux', completed: false },
    { id: 3, todo: 'Watering Plants', completed: true },
];

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_ALL:
            return [];

        case REMOVE_TODO:
            return state.filter((item) => item.id !== action.payload);

            case UPDATE_TODO:
                let data = action.payload;
                const updatedArray=[];
                state.map((item)=>{
                    if(item.id===data.id){
                        item.id = data.id;
                        item.todo = data.todo;
                        item.completed = data.completed;
                    }
                    updatedArray.push(item);
                })
                return updatedArray; 

        default:
            return state;
    }
};
