import React from "react";
import './style.scss'


const DeleteModal = (props) => {
  return <div className='P-modal-block'>
    <div className='P-modal-content'>
      <h3>Are you sure you want to delete?</h3>
      <div className='P-modal-actions'>
        <button onClick={props.accept}>Yes</button>
        <button onClick={props.close}>No</button>
      </div>
    </div>
  </div>
}
export default DeleteModal