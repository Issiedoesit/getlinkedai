import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItems from '../../../../data/NavItems'
import RegisterLink from '../../../widgets/Buttons/RegisterLink'
import GetLinkedLogo from '../../../widgets/GetLinkedLogo'

const Navbar = () => {
  return (
    <nav className={`pt-16 pb-7 px-32 border-b-1px border-b-brandGray1x flex items-center justify-between`}>
        
        <GetLinkedLogo />

        {/* Menu Items */}
        <ul className={`flex items-center gap-10 font-normal font-Montserrat`}>
            {NavItems.map((item, idx) => {
                return <li key={idx} className={''}>
                    <NavLink to={item.link} className={`px-4 py-2 hover:bg-brandPurple1x/40 hover:rounded-md transition-all duration-300 ease-in-out`}>{item.name}</NavLink>
                </li>
            })}
            <div className={`pl-8`}>
                <RegisterLink />
            </div>
        </ul>
    </nav>
  )
}

export default Navbar