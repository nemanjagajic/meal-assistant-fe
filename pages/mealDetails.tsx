import React, { ChangeEventHandler, useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { GlobalContext } from '../providers/GlobalContextProvider'
import { calculateValueByPortionSize } from '../utils'

interface PortionSize {
  id: number,
  size: number
}

enum FoodField {
  CALORIES = 'calories',
  PROTEINS = 'proteins'
}

const MealDetails = () => {
  const { selectedMeal, setSelectedMeal } = useContext(GlobalContext);
  const [portionSizes, setPortionSizes] = useState<Array<PortionSize>>([])

  useEffect(() => {
    populatePortionSizes()
    return () => {
      setSelectedMeal([])
    }
  }, [])

  const populatePortionSizes = () => {
    setPortionSizes(selectedMeal.map(food => ({ id: food.id, size: Number.parseInt(food.attributes.portionSize) })))
  }

  const handleInputChange = (foodId: number, newPortionSize: number) => {
    const updatedPortionSizes = portionSizes.map(portionSize => {
      if (foodId === portionSize.id) portionSize.size = newPortionSize
      return portionSize
    })

    setPortionSizes(updatedPortionSizes)
  }

  const calculateSum = (field: FoodField) => {
    const sum = selectedMeal.reduce((prevValue, food) => {
      const foundFood = selectedMeal.find(f => f.id == food.id)
      const portionSize = portionSizes.find(ps => ps.id === food.id)
      if (!foundFood || !portionSize) return prevValue
      return prevValue + ((foundFood.attributes[field] / 100 * portionSize.size) || 0)
    }, 0)

    return sum.toFixed(field === FoodField.CALORIES ? 0 : 1) || 0
  }

  return (
    <div>
      <div className='sticky top-0'>
        <NavBar />
      </div>
      <div className='flex flex-col items-center mt-8'>
        {selectedMeal.map(food => {
          const portionSize = portionSizes.find(ps => ps.id === food.id)
          if (!portionSize) return null

          return (
            <div key={food.id} className='flex flex-col md:flex-row justify-center items-center mb-6 p-4 border-b'>
              <p className='flex items-center justify-center w-52 text-gray-600 mb-4 md:justify-start md:mb-0'>{food.attributes.name}</p>
              <input
                className='border p-2 rounded-xl focus:outline-none'
                value={portionSize.size || 0}
                onChange={e => handleInputChange(food.id, Number.parseInt(e.target.value))}
              />
              <p className='flex justify-center items-center w-24 h-12 p-2 bg-gray-100 rounded-xl m-4'>
                {`${calculateValueByPortionSize(food.attributes.calories, portionSize.size).toFixed(0)} kcal`}
              </p>
              <p className='flex justify-center items-center w-24 h-12 p-2 bg-gray-100 rounded-xl'>
                {`${calculateValueByPortionSize(food.attributes.proteins, portionSize.size).toFixed(1)} p`}
              </p>
            </div>
          )
        })}
        {selectedMeal?.length > 0 && (
          <p className='text-lg mt-4 mb-8'>
            {`Ukupno: ${calculateSum(FoodField.CALORIES)} kcal, ${calculateSum(FoodField.PROTEINS)} p`}
          </p>
        )}
      </div>
    </div>
  )
}

export default MealDetails