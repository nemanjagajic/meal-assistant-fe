import type { NextPage } from 'next'
import { useFetchFoods } from '../hooks/foods'
import FoodTable from '../components/FoodTable'

const Home: NextPage = () => {
  const { data: foods } = useFetchFoods()

  return (
    <div>
      {foods && <FoodTable foods={foods} />}
    </div>
  )
}

export default Home
