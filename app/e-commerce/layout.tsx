import React from 'react'
import HeaderTop from './_components/HeaderTop'
import HeaderMain from './_components/HeaderMain'
import Navbar from './_components/Navbar'
import MobileNavbar from './_components/MobileNavbar'

const layout = ({children}:{children:React.ReactNode
}) => {
  return (
    <div className=''>
        <HeaderTop/>
        <HeaderMain/>
        <Navbar/>  
        <MobileNavbar/>     
        {children}
    </div>
  )
}

export default layout