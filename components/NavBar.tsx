import React, { FC } from 'react'
import { useRouter } from 'next/router'

export enum TAB {
  HOME = 'home',
  ADD_FOOD = 'addFood'
}

type NavBarProps = {
  activeTab: TAB
}

const NavBar: FC<NavBarProps> = ({ activeTab }) => {
  const router = useRouter()

  return (
    <nav className='flex flex-row bg-teal-600 p-4'>
      <div
        className={`text-white pl-2 pr-3 cursor-pointer ${activeTab === TAB.HOME && 'font-bold'}`}
        onClick={() => router.replace('/')}
      >
        Food
      </div>
      <div
        className={`text-white pl-2 pr-3 cursor-pointer ${activeTab === TAB.ADD_FOOD && 'font-bold'}`}
        onClick={() => router.push('/addFood')}
      >
        Add food
      </div>
    </nav>
  )
}

export default NavBar