import request from '../request'
import { Food } from '../../ts/foodTypes';

const API_ENDPOINTS = {
  FOODS: '/api/foods',
}

export const getFoods = async (): Promise<Array<Food>> => {
  try {
    const { data: responseData } = await request.get(API_ENDPOINTS.FOODS)
    return responseData.data
  } catch (e) {
    throw e
  }
}