import React, { FC } from 'react'
import { Food } from '../ts/foodTypes'
import { useRouter } from 'next/router'
import { calculateValueByPortionSize } from '../utils'

type MealDetailsButtonProps = {
  selectedFoods: Array<Food>,
  setSelectedMeal: Function
}

const MealDetailsButton: FC<MealDetailsButtonProps> = ({ selectedFoods, setSelectedMeal }) => {
  const router = useRouter()

  return (
    <div
      className='fixed bottom-0 left-1/2 transform -translate-x-1/2 bottom-8 w-52 bg-teal-600 rounded-3xl p-2'
      onClick={() => {
        setSelectedMeal(selectedFoods)
        router.push('/mealDetails')
      }}
    >
      <div className='flex flex-row items-center justify-center cursor-pointer'>
        <p className='text-gray-200 mr-1 text-lg font-light'>
          {`${selectedFoods.reduce((prevValue, food) => {
            return prevValue + calculateValueByPortionSize(food.attributes.calories, Number.parseInt(food.attributes.portionSize))
          }, 0).toFixed(0)} kcal,`}
        </p>
        <p className='text-gray-200 text-lg font-light'>
          {`${selectedFoods.reduce((prevValue, food) => {
            return prevValue + calculateValueByPortionSize(food.attributes.proteins, Number.parseInt(food.attributes.portionSize))
          }, 0).toFixed(1)} p`}
        </p>
      </div>
      <div className='flex flex-row items-center justify-center cursor-pointer'>
        <p className='text-white'>Open meal details</p>
      </div>
    </div>
  )
}

export default MealDetailsButton