import { configureStore } from '@reduxjs/toolkit'

import chordsReducer from './features/chords/chordsSlice'

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : []

const store = configureStore({
  reducer: {
    chords: chordsReducer
  },
  preloadedState: persistedState,
})

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store