import { createSlice } from "@reduxjs/toolkit";


// initial state 
const initialState = {
    client: {
        toggleFrom: false,
        formId: undefined,
        deletedId: null,
    }
}


// state update function's...
// call this inside dispatch() at caller component's...
export const ReducerSlice = createSlice({
    name: 'crudApp',
    initialState,
    reducers: {
        toggleChangeAction: (state) => {
            state.client.toggleFrom = !state.client.toggleFrom;
        },
        updateAction: (state, actions) => {
            state.client.formId = actions.payload
        },
        deleteAction: (state, actions) => {
            state.client.deletedId = actions.payload
        },
    }
})


// name export these...
export const { toggleChangeAction, updateAction, deleteAction } = ReducerSlice.actions;


export default ReducerSlice.reducer;