import React from 'react'

const Button = ({title, type, onClick}) => {
  //btn-primary
  return (
    <button className={"btn"+type}>{title}</button>
  )
  
}

export default Button