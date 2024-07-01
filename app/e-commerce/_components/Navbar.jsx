import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden md:block'>
        <div className='container'>
            <div className='items-center gap-5 flex flex-row justify-center mt-2 '>
                <div className='nav-link'>HOME</div>
                <div className='nav-link'>CATEGORIES</div>
                <div className='nav-link'>{`MEN'S`}</div>
                <div className='nav-link'>{`WOMEN'S`}</div>
                <div className='nav-link'>JEWELRY</div>
                <div className='nav-link'>PERFUME</div>
                <div className='nav-link'>BLOG</div>
                <div className='nav-link'>HOT OFFERS</div>
                <div className='nav-link'></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar