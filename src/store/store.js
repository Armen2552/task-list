import {configureStore} from "@reduxjs/toolkit";
import taskReducer from './reducers/taskSlice'


export const store = () => {
  return configureStore({
    reducer: taskReducer
  })
}