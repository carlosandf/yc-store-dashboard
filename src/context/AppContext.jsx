/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'
import useInitialState, { defaultState } from '../hooks/useInitialState'

const AppContext = createContext(defaultState)

export const AppContextProvider = ({ children }) => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
