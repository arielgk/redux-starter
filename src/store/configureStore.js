import thunk from "redux-thunk";
import logger from "redux-logger";
import {configureStore, getDefaultMiddleware} from "@acemarke/redux-starter-kit";
import initialState from "./initialState";
import reducer from '../reducers'
import { reduxBatch } from '@manaflair/redux-batch'
const middleware = [...getDefaultMiddleware(), logger,thunk]



export default configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    initialState,
    enhancers: [reduxBatch]
})