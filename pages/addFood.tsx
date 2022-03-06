import React, { FC, useState } from 'react'
import NavBar from '../components/NavBar'
import { CategoryType } from '../ts/foodTypes'
import Switch from 'react-switch'
import { useAddFood } from '../hooks/foods'
import { useRouter } from 'next/router'
import { calculateValueByPortionSize } from '../utils'

const AddFood: FC = () => {
  const router = useRouter()
  const { mutate: addFood, isLoading } = useAddFood(() => router.replace('/'))

  const [name, setName] = useState('')
  const [calories, setCalories] = useState(0)
  const [proteins, setProteins] = useState(0)
  const [portionSize, setPortionSize] = useState('')
  const [category, setCategory] = useState<CategoryType>(CategoryType.MAIN)
  const [isBase, setIsBase] = useState(false)

  const isRequiredDataPopulated = !!name && !!calories && !!proteins && !!portionSize && !!category

  const handleAddFood = () => {
    if (!isLoading && isRequiredDataPopulated) addFood({
      data: {
        name,
        calories,
        proteins,
        category,
        isBase,
        portionSize
      }
    })
  }

  return (
    <div>
      <div className='sticky top-0'>
        <NavBar />
      </div>
      <div className='flex flex-col w-4/5 md:w-1/2 m-auto mt-8'>
        <input
          className='border p-2 rounded-xl focus:outline-none mb-4'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={'Name'}
        />
        <input
          className='border p-2 rounded-xl focus:outline-none mb-4'
          value={calories || ''}
          onChange={e => setCalories(Number.parseInt(e.target.value) || 0)}
          placeholder={'Calories'}
        />
        <input
          type={'number'}
          className='border p-2 rounded-xl focus:outline-none mb-4'
          value={proteins || ''}
          onChange={e => setProteins(Number.parseFloat(e.target.value) || 0)}
          placeholder={'Proteins'}
        />
        <input
          className='border p-2 rounded-xl focus:outline-none mb-4'
          value={portionSize || ''}
          onChange={e => setPortionSize(e.target.value)}
          placeholder={'Portion size'}
        />
        <select
          name='category'
          className='border p-2 rounded-xl focus:outline-none mb-4 appearance-none cursor-pointer'
          // @ts-ignore
          onChange={e => setCategory(e.target.value)}
          value={category}
        >
          <option value={CategoryType.MAIN}>Main</option>
          <option value={CategoryType.BREAKFAST}>Breakfast</option>
        </select>
        <div className='flex flex-row p-2 mb-4'>
          <p className='mr-4'>Is base food: </p>
          <Switch onChange={() => setIsBase(!isBase)} checked={isBase} onColor='#0d9488' offColor='#9ca3af' />
        </div>
        <p className='text-center text-gray-600 h-4 mb-2'>
          {isRequiredDataPopulated && `For the given size: ${calculateValueByPortionSize(calories, Number.parseInt(portionSize)).toFixed(0)} kcal, 
        ${calculateValueByPortionSize(proteins, Number.parseInt(portionSize)).toFixed(1)}  p`}
        </p>
        <div
          onClick={handleAddFood}
          className={`
           flex items-center justify-center w-40 h-12
           rounded-3xl m-auto mt-4 text-white
           ${isRequiredDataPopulated ? 'cursor-pointer bg-teal-600' : 'cursor-auto bg-gray-400'}`
        }
        >
          Add food
        </div>
      </div>
    </div>
  )
}

export default AddFood