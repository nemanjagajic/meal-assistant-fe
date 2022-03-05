import React, { FC } from 'react'
import { CategoryType } from '../ts/foodTypes'

type SearchInputProps = {
  selectedCategory: CategoryType,
  setSelectedCategory: Function,
  searchText: string,
  setSearchText: Function
}

const SearchInput: FC<SearchInputProps> = (
  { selectedCategory, setSelectedCategory, searchText, setSearchText }
) => {
  return (
    <div className='flex items-center justify-center p-4 bg-white'>
      <div className='flex border-2 rounded w-full md:w-96'>
        <input onChange={e => setSearchText(e.target.value)} value={searchText} type='text' className='px-4 py-2 focus:outline-none w-full' placeholder='Search...' />
        <button
          className='flex items-center justify-center px-4 border-l'
          onClick={() => setSelectedCategory(CategoryType.BREAKFAST)}
        >
          <div className={`text-${selectedCategory === CategoryType.BREAKFAST ? 'teal-600' : 'stone-400'} font-bold`}>B</div>
        </button>
        <button
          className='flex items-center justify-center px-4 border-l'
          onClick={() => setSelectedCategory(CategoryType.MAIN)}
        >
          <div className={`text-${selectedCategory === CategoryType.MAIN ? 'teal-600' : 'stone-400'} font-bold`}>M</div>
        </button>
      </div>
    </div>
  )
}

export default SearchInput