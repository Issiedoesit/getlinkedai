import React from 'react'
import { NavLink } from 'react-router-dom'

const RegisterLink = ({link, text}) => {
  return (
    <NavLink to={link || '/register'} className={`register--gradient rounded-four py-4 px-12 font-normal`}>{text || "Register"}</NavLink>
  )
}

export default RegisterLink