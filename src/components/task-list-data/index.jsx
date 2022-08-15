import React, {useEffect, useState} from "react";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import TaskBox from "../task-box";
import DeleteModal from "../delete-modal";
import {deleteTask, setTaskList} from "../../store/reducers/taskSlice";


const TaskListData = () => {
  const dispatch = useDispatch()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [deletedItem, setDeletedItem] = useState(null)

  const taskList = useSelector(state => state.taskList)

  const selectTaskForDelete = (index) => {
    setDeletedItem(index)
    setIsOpenModal(true)
  }


  const closeModal = () => {
    setIsOpenModal(false)
  }

  const deleteModal = () => {
    dispatch(deleteTask(deletedItem))
    setIsOpenModal(false)
  }

  useEffect(() => {
    const x = localStorage.getItem('task_list')
    if (x) {
      dispatch(setTaskList(JSON.parse(x)))
    }
  }, [])


  return <div className='G-container'>
    <div className='P-task-list'>

      {taskList.length ? taskList.map((item, index) => {
        return <TaskBox index={index} key={index} item={item} onClick={() => selectTaskForDelete(index)}/>
      }) : <div className='P-empty-list'>
        <h3>Your life is a blank page. You write on it.</h3>
        <p>So start by adding your tasks here.</p>
      </div>}

    </div>

    {isOpenModal ? <DeleteModal close={closeModal} accept={deleteModal}/> : null}
  </div>
}
export default TaskListData