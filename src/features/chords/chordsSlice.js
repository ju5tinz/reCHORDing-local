import { createSlice, createEntityAdapter, nanoid } from '@reduxjs/toolkit'

const chordsAdapter = createEntityAdapter()

const chordsSlice = createSlice({
  name: 'chords',
  initialState: chordsAdapter.getInitialState(),
  reducers: {
    chordAdded(state, action) {
      chordsAdapter.addOne(state, {id: nanoid(), ...action.payload})
    }
  },
})

export default chordsSlice.reducer

export const { chordAdded } = chordsSlice.actions

export const {
  selectAll: selectAllChords,
  selectById: selectChordById,
  selectIds: selectChordIds
} = chordsAdapter.getSelectors(state => state.chords)