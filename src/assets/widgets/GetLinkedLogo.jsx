import React from 'react'
import { NavLink } from 'react-router-dom'

const GetLinkedLogo = ({fontSize}) => {
  return (
    <NavLink to={'/'} className={`${fontSize ? fontSize : "text-3xl"}  font-bold font-Clash`}>get<span className={`text-brandPurple1x`}>linked</span></NavLink>
  )
}

export default GetLinkedLogo