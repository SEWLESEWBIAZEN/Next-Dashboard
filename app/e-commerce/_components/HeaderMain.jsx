'use client'

import { UserCircleIcon, HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import React,{ useState } from 'react'


const HeaderMain = () => {
    const [countSaved, setCountSaved]=useState(0)
    const [countPurchased, setCountPurchased]=useState(0)
    return (
        <div className='border border-b'>
            <div className='container py-6'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                    {/* brand name/ logo */}
                    <div className='text-[18px] hidden sm:block'><strong>Ac</strong>ME</div>

                    {/* search bar */}
                    <div className='flex flex-row items-center w-[300px] sm:w-[70%] text-gray-400 -space-x-5'>
                        <input
                            type='text'
                            name='search'
                            id="search"
                            placeholder='Enter any product name...'
                            className='w-full h-8 rounded rounded-md text-[12px] border-gray-200' />
                            <MagnifyingGlassIcon className='h-4 w-4' />


                    </div>
                    {/* icons */}
                    <div className=' hidden sm:flex flex-row gap-2'>
                        <div><UserCircleIcon className='h-6 w-6' /></div>
                        <div className='-space-y-9 '>
                            <HeartIcon className='h-6 w-6 z-0 hover:text-blue-500'  onClick={()=>setCountSaved(countSaved+1)}/>
                            <p className='text-center grid translate-x-1 -translate-y-1 items-center text-[16px] rounded rounded-full bg-blue-500 z-40'>{countSaved}</p>

                        </div>
                        <div className='-space-y-9'>
                            <ShoppingBagIcon className='h-6 w-6 z-0 hover:text-blue-500' onClick={()=>setCountPurchased(countPurchased+1)} />
                            <p className='text-center grid translate-x-1 -translate-y-1 items-center text-[16px] rounded rounded-full bg-blue-500 z-40'>{countPurchased}</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain