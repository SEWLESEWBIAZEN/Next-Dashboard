import React from 'react'
// import { BsFacebook, BsTwitter, BsInstagram,BsLinkdin  } from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className=' border-b border-gray-200 hidden sm:block'>
      <div className='container py-4' >
        <div className='justify-between flex items-center'>
          <div className='hidden md:flex gap-1'> 
            <div className='header_top_icon_wrapper w-8 text-center'>
              F
            </div>
            <div className='header_top_icon_wrapper  w-8 text-center' >
              X
            </div>
            <div className='header_top_icon_wrapper  w-8 text-center' >
             I
            </div>
            <div className='header_top_icon_wrapper  w-8 text-center' >
              L
            </div>
          </div>
          <div className='text-gray-500 text-[12px]'>
            <strong>FREE SHIPPING</strong> &nbsp;
            THIS WEEK ORED OVER - $55
          </div>
          <div>
            <div className='flex gap-0'>
              <select  className=' px-6 text-gray-500 text-[12px] w-[100px] border-none' name='currency' id='currency' >
                <option value="USD $">USD $</option>
                <option value="Euro  €">EURO €</option>
                <option value="ETB">ETB</option>
              </select>
              <select className='px-4 text-gray-500 text-[12-px] w-[120px] border-none' name='language' id='language'>
                <option value="English"> English</option>
                <option value="Amharic"> Amharic</option>
              </select>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop