const initialState = {
    list: [{item:"breakfast", key:0, isChecked: 'incomplete', isComplete: false}, {item:"lunch", key:1, isChecked: 'incomplete', isComplete: false}, {item:"dinner", key:2, isChecked:'incomplete', isComplete: false}],
    key:3,
    isDisabled: true,
    newTask: ''
}

const CREATE = 'CREATE',
      COMPLETE = 'COMPLETE',
      DELETE = 'DELETE',
      HANDLE_CHANGE = 'HANDLE_CHANGE';


export function handleChange(event){
    return {
        type: HANDLE_CHANGE,
        payload: event.target.value
    }
}

export function createTask(task){
    return {
        type: CREATE,
        payload: task
    }
}      

export function completeTask(task){
    return {
        type: COMPLETE,
        payload: task
    }
}

export function deleteTask(task){
    return {
        type: DELETE,
        payload: task
    }
}

function reducer(state = initialState, action) {
    let newItem,
        tasks,
        remainingTasks;
    switch(action.type){
        case CREATE:
        state.key++;
        newItem = {item: action.payload, key: state.key, isChecked: 'incomplete'}
        return Object.assign({}, state, {list: state.list.concat([newItem]), newTask: '', isDisabled: true})
        case COMPLETE:
        tasks = state.list.filter(e => {
            if(e.key === action.payload.key) {
                e.isChecked = 'completed-item';
                e.isComplete = true
            }
            return e;
        })

        return Object.assign({}, state, {list: tasks});
        case DELETE:
        remainingTasks = state.list.filter(e => {
            return e.key !== action.payload.key;
        })
        return Object.assign({}, state, {list: remainingTasks});
        case HANDLE_CHANGE:
        return Object.assign({}, state, {isDisabled: false, newTask: action.payload})
        default :
        break;
    }
    return state;
}

export default reducer;