import type { NextPage } from 'next'
import { useFetchFoods } from '../hooks/foods'
import FoodTable from '../components/FoodTable'
import NavBar, { TAB } from '../components/NavBar'
import SearchInput from '../components/SearchInput'
import { useContext, useState } from 'react'
import { CategoryType, Food } from '../ts/foodTypes'
import MealDetailsButton from '../components/MealDetailsButton'
import ClearMealButton from '../components/ClearMealButton'
import { GlobalContext } from '../providers/GlobalContextProvider'

const Home: NextPage = () => {
  const { selectedMeal, setSelectedMeal } = useContext(GlobalContext);
  const { data: foods } = useFetchFoods()
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(CategoryType.MAIN)
  const [searchText, setSearchText] = useState('')
  const [selectedFoods, setSelectedFoods] = useState<Array<Food>>([])

  const filteredFoods = foods?.filter(
    food => food.attributes.name.toLowerCase().includes(searchText.toLowerCase()) && food.attributes.category === selectedCategory
  )

  const handleFoodSelected = (foodId: string) => {
    const isAlreadySelected = selectedFoods.find(food => food.id.toString() === foodId)
    if (isAlreadySelected) {
      setSelectedFoods(selectedFoods.filter(food => food.id.toString() !== foodId))
      return
    }

    const food = foods?.find(food => food.id.toString() === foodId)
    if (food) setSelectedFoods([...selectedFoods, food])
  }

  return (
    <div>
      <div className='sticky top-0'>
        <NavBar activeTab={TAB.HOME} />
        <SearchInput
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>
      {filteredFoods && <FoodTable foods={filteredFoods} handleFoodSelected={handleFoodSelected} selectedFoods={selectedFoods} />}
      {selectedFoods?.length > 0 && (
        <>
          <MealDetailsButton selectedFoods={selectedFoods} setSelectedMeal={setSelectedMeal} />
          <ClearMealButton clearMeal={() => setSelectedFoods([])} />
        </>
      )}
    </div>
  )
}

export default Home
