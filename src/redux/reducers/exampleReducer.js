const initialState = {
    example: {}
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "": {
            return { ...state, example: action.payload }
        }
        default: {
            return state
        }
    }
}

export default exampleReducer;