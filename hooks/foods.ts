import { useQuery } from 'react-query'
import { Food } from '../ts/foodTypes'
import { getFoods } from '../services/api/foods'

export const useFetchFoods = () => {
  const { data, error, isLoading, isFetching } = useQuery<Array<Food>>(
    'foods',
    getFoods
  )
  return { data, error, isLoading, isFetching }
}