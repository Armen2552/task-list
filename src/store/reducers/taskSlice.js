import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  taskList: [],
  closeTaskList: [],
  isCheck: false,
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {

    addTask(state, action) {
      const body = {
        taskName: action.payload,
        isCheck: false,
      }
      state.taskList.push(body)
      localStorage.setItem('task_list', JSON.stringify(state.taskList))
    },

    deleteTask(state, action) {
      const cardIndex = action.payload;
      state.taskList = state.taskList.filter((item, index) => index !== cardIndex)
      localStorage.setItem('task_list', JSON.stringify(state.taskList))
    },

    setTaskList(state, action) {
      state.taskList = action.payload
    },

    setCompleteTask(state, action) {
      state.taskList = state.taskList.map((item, index) => {
        if (index === action.payload.index) {
          item.isCheck = !item.isCheck
        }
        return item
      })
      localStorage.setItem('task_list', JSON.stringify(state.taskList))

    },
    setIsCheck(state) {
      state.isCheck = !state.isCheck
      if (state.isCheck) {
        state.closeTaskList = state.taskList
        state.taskList = state.taskList.filter(item => !item.isCheck)

      } else {
        state.taskList = state.closeTaskList
      }
    }

  }
})

export const {deleteTask, addTask, setTaskList, setIsCheck, setCompleteTask} = taskSlice.actions

export default taskSlice.reducer