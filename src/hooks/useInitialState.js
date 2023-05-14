import { useState } from 'react'

const initialState = {
  products: [],
  modal: {
    isOpen: false,
    id: ''
  }
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const saveProducts = payload => {
    setState(prevState => ({
      ...prevState,
      products: [...payload]
    }))
  }

  const toggleModal = payload => {
    setState(prevState => ({
      ...prevState,
      modal: { ...payload }
    }))
  }

  return {
    state,
    toggleModal,
    saveProducts
  }
}

export default useInitialState
