import React from 'react'
import Footer from '../../components/Navigation/Footer/Footer'
import Navbar from '../../components/Navigation/Navbar/Navbar'

const BodyLayout = ({children}) => {
  return (
    <div className={`bg-brandDarkPurple1x min-h-screen text-white`}>
        <Navbar />

        <div>
            {children}
        </div>

        <Footer />
    </div>
  )
}

export default BodyLayout