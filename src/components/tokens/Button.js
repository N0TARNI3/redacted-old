import React from 'react'

const Button = ({title, type}) => {
  return (
    <button className={"btn "+type}>{title}</button>
  )
}

export default Button