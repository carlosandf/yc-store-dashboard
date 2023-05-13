import { createContext } from 'react'

const AppContext = createContext()

const INITIAL_STATE = {
  products: []
}

export function AppContextProvider ({ children }) {
  return (
    <AppContext.Provider value={INITIAL_STATE}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
