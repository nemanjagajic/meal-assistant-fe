import React, { FC } from 'react'
import { Trash } from 'react-ionicons'

type ClearMealButtonProps = {
  clearMeal: () => void
}

const ClearMealButton: FC<ClearMealButtonProps> = ({ clearMeal }) => {
  return (
    <div
      className='fixed bottom-0 left-4 bottom-8 bg-gray-400 rounded-full p-2 cursor-pointer'
      onClick={clearMeal}
    >
      <Trash width='20px' height='20px' color={'#fff'}/>
    </div>
  )
}

export default ClearMealButton