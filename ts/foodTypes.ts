export enum CategoryType {
  BREAKFAST = 'breakfast',
  MAIN = 'main'
}

export interface Food {
  id: number,
  attributes: {
    name: string,
    calories: number,
    proteins: number,
    portionSize: string,
    category: CategoryType,
    isBase?: boolean
  }
}