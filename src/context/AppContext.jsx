/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'

const INITIAL_STATE = {
  products: [],
  modal: {
    isOpen: false,
    id: ''
  }
}
const AppContext = createContext(INITIAL_STATE)

export default AppContext
