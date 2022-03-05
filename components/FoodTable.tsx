import React, { FC } from 'react'
import { Food } from '../ts/foodTypes'

const columnTitles = ['name', 'size', 'kcal', 'p']

type FoodTableProps = {
  foods: Array<Food>
}

const FoodTable: FC<FoodTableProps> = ({ foods = [] }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
              <tr>
                {columnTitles.map(columnTitle => (
                  <th key={columnTitle} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    {columnTitle}
                  </th>
                ))}
              </tr>
              </thead>
              <tbody>
              {foods.map(food => (
                <tr key={food.id} className="border-b">
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {food.attributes.name}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {`${food.attributes.portionSize}g`}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {food.attributes.portionCalories}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {food.attributes.portionProteins}
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