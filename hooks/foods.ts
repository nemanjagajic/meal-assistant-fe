import { useMutation, useQuery, useQueryClient } from 'react-query'
import { CreateFoodRequest, Food } from '../ts/foodTypes'
import { createFood, getFoods } from '../services/api/foods'

export const useFetchFoods = () => {
  const { data, error, isLoading, isFetching } = useQuery<Array<Food>>(
    'foods',
    getFoods
  )
  return { data, error, isLoading, isFetching }
}

export const useAddFood = (callbackSuccessFn?: () => void) => {
  const queryClient = useQueryClient();
  
  const { mutate, isLoading } = useMutation<Food, unknown, CreateFoodRequest>(
    createFood,
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('foods');
        callbackSuccessFn?.()
      }
    }
  )
  return { mutate, isLoading }
}