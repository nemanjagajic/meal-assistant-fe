enum CategoryType {
  BREAKFAST = 'breakfast',
  MAIN = 'main'
}

export interface Food {
  id: number,
  attributes: {
    name: string,
    calories: number,
    proteins: number,
    portionSize: number,
    portionCalories: number,
    portionProteins: number,
    category: CategoryType,
    isBase?: boolean
  }
}