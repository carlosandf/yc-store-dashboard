import { useState } from 'react'

export const defaultState = {
  products: [],
  modal: {
    isOpen: false,
    id: ''
  },
  signed: false
}

const useInitialState = () => {
  const [state, setState] = useState(defaultState)

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

  const setSigned = payload => {
    setState(prevState => ({
      ...prevState,
      signed: payload
    }))
  }

  return {
    state,
    setSigned,
    toggleModal,
    saveProducts
  }
}

export default useInitialState
