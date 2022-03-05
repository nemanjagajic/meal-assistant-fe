import React, { FC, useState } from 'react'
import { Food } from '../ts/foodTypes'

export const GlobalContext = React.createContext({
  selectedMeal: [] as Array<Food>,
  setSelectedMeal: () => {}
})

type GlobalContextProviderProps = {
  children: any
}

const GlobalContextProvider: FC<GlobalContextProviderProps> = ({ children }) => {
  const [selectedMeal, setSelectedMeal] = useState<Array<Food>>([])

  return (
    <GlobalContext.Provider value={{
      selectedMeal,
      // @ts-ignore
      setSelectedMeal
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider