// middleware 
// this middleware listen the toggle change of edit button click by user...

import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toggleChangeAction, updateAction } from './reducer';


const listenerMiddleware = createListenerMiddleware();
 

listenerMiddleware.startListening({

    actionCreator: toggleChangeAction,

    effect: async (action, listenerApi) => {
        listenerApi.dispatch(updateAction(action.payload))
    }
})


export default listenerMiddleware;