import React from 'react'
import HeaderTop from './_components/HeaderTop'
import HeaderMain from './_components/HeaderMain'

const layout = ({children}:{children:React.ReactNode
}) => {
  return (
    <div className=''>
        <HeaderTop/>
        <HeaderMain/>
        {children}
    </div>
  )
}

export default layout