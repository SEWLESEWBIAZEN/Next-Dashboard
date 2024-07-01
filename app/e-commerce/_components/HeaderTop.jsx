import React from 'react'
import { FaceSmileIcon ,ShareIcon ,XCircleIcon, InformationCircleIcon, LinkIcon} from '@heroicons/react/24/outline'

const HeaderTop = () => {
  return (
    <div className=' border-b border-gray-200 hidden sm:block'>
      <div className='container py-1' >
        <div className='justify-between flex items-center'>
          <div className='hidden md:flex gap-1'> 
            <div className='header_top_icon_wrapper w-8 text-center'>
            <ShareIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className='header_top_icon_wrapper  w-8 text-center' >
            <XCircleIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className='header_top_icon_wrapper  w-8 text-center' >
            <InformationCircleIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className='header_top_icon_wrapper  w-8 text-center' >
            <LinkIcon className="h-6 w-6 text-blue-500" />
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