import React from "react";
import Checkbox from "../checkbox";
import './style.scss'
import {useDispatch} from "react-redux";
import {setCompleteTask} from "../../store/reducers/taskSlice";

const TaskBox = (props) => {

  const dispatch = useDispatch()
  const handleCheck = () => {
    dispatch(setCompleteTask({item: props.item, index: props.index}))
  }

  return <div className={`P-task-box ${props.item.isCheck ? 'P-checked-task' : ''}`}>
    <div className='P-task-info'>
      <Checkbox isCheck={props.item.isCheck} onChange={handleCheck}/>
      <p>{props.item.taskName}</p>
    </div>
    <span className='P-task-delete' onClick={props.onClick}/>
  </div>
}
export default TaskBox