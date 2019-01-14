let initialState = {
    sort : {
        by : 'status',
        value : 1
    }
}

let myReducer = (state = initialState, action) => {
    if (action.type === "SORT") {
        let {by ,value} = action.sort;
        let state = {
            by: by,
            value: value
        }
        return state
    }
    return state;
}

export default myReducer;