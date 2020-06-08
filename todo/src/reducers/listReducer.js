export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    }],
}
export const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    console.log(todo.id, action.payload)
                    if (todo.id === action.payload) {
                        return {
                            ...todo, completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
}