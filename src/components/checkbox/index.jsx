import React from "react";
import './style.scss'

const Checkbox = (props) => {
  const handleChange = ()=>{
    props.onChange && props.onChange()
  }
  return <span className={`G-checkbox ${props.isCheck ? 'G-checked' : ''}`} onClick={handleChange}></span>
}

export default Checkbox