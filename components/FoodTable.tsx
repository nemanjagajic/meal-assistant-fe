import React, { FC } from 'react'
import { Food } from '../ts/foodTypes'
import { calculateValueByPortionSize } from '../utils'

const columnTitles = ['name', 'size', 'kcal', 'p']

type FoodTableProps = {
  foods: Array<Food>,
  handleFoodSelected: (foodId: string) => void,
  selectedFoods: Array<Food>
}

const FoodTable: FC<FoodTableProps> = ({ foods = [], handleFoodSelected, selectedFoods }) => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full'>
              <thead className='border-b'>
              <tr>
                {columnTitles.map(columnTitle => (
                  <th key={columnTitle} scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                    {columnTitle}
                  </th>
                ))}
              </tr>
              </thead>
              <tbody>
              {foods.map(food => (
                <tr
                  // @ts-ignore
                  onClick={e => handleFoodSelected(e.target?.parentNode?.id)} id={food.id.toString()} key={food.id}
                  className={`${selectedFoods.find(f => f.id == food.id) ? 'bg-teal-100' : 'bg-white'} border-b cursor-pointer`}
                >
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap font-bold text-gray-500'>
                    {food.attributes.name}
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    {food.attributes.portionSize}
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    {calculateValueByPortionSize(food.attributes.calories, Number.parseInt(food.attributes.portionSize)).toFixed(0)}
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    {calculateValueByPortionSize(food.attributes.proteins, Number.parseInt(food.attributes.portionSize)).toFixed(1)}
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodTable