import React, { FC, useState, createContext } from 'react'
import { Food } from '../ts/foodTypes'

export const GlobalContext = createContext({
  selectedMeal: [] as Array<Food>,
  setSelectedMeal: (foods: Array<Food>) => {}
})

type GlobalContextProviderProps = {
  children: any
}

const GlobalContextProvider: FC<GlobalContextProviderProps> = ({ children }) => {
  const [selectedMeal, setSelectedMeal] = useState<Array<Food>>([])

  return (
    <GlobalContext.Provider value={{
      selectedMeal,
      setSelectedMeal
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider