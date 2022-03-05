import React from 'react'
import { useRouter } from 'next/router'

const NavBar = () => {
  const router = useRouter()

  return (
    <nav className='flex flex-row bg-teal-600 p-4'>
      <div className='text-white pl-2 pr-3 cursor-pointer' onClick={() => router.replace('/')}>Food</div>
      <div className='text-white pl-2 pr-3 cursor-pointer'>Add food</div>
      <div className='text-white pl-2 pr-3 cursor-pointer'>My meals</div>
    </nav>
  )
}

export default NavBar