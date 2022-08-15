import React, {useState} from "react";
import Checkbox from "../checkbox";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {setIsCheck, addTask} from "../../store/reducers/taskSlice";

const Header = () => {
  const dispatch = useDispatch()
  const taskList = useSelector(state => state.taskList)

  const isCheck = useSelector(state => state.isCheck)
  const [error, setError] = useState('')
  const [taskName, setTaskName] = useState('')

  const handleClick = () => {

    if (validation()) {
      setError('')
      dispatch(addTask(taskName))
      setTaskName('')
    }
  }

  const handleChange = (e) => {
    setTaskName(e.target.value)
  }


  const validation = () => {
    let isValidate = true
    if (!taskName.length) {
      isValidate = false
      setError('You must fill the  task field')
    }

    if (taskName.length && taskName.length > 54) {
      isValidate = false
      setError('Task content can contain max 54 characters.')
    }

    return isValidate
  }

  const handleKeyEnter = (e)=>{
    if(e.keyCode===13){
      handleClick()
    }
  }

  return <div className='G-container'>
    <div className='P-header-block'>
      {taskList.length ? <div className='P-check-completed-content'>
        <div className='P-check-completed' onClick={() => dispatch(setIsCheck())}>
          <Checkbox isCheck={isCheck}/>
          <p>Hide completed</p>
        </div>
      </div> : null}
      <div className='P-input-field'>
        <label>
          <p>Task</p>
          <input type="search" value={taskName} onKeyDown={handleKeyEnter} onChange={handleChange} className={`${error ? 'P-input-error' : ''}`}/>
        </label>
        <button onClick={handleClick}>Add</button>
      </div>
      {error && <p className='P-error-text'>{error}</p>}
    </div>
  </div>
}
export default Header