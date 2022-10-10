import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isTrue: false,
  value: 0,
}


export const lastResultSlice = createSlice({
  name: 'lastResult',
  initialState,
  reducers: {
    setLastResult: (state, action) => {
      state.isTrue = action.payload.isTrue
      state.value = action.payload.isTrue ? action.payload.value : -action.payload.value
    },
    clearLastResult: (state) => {
      state.value = 0
    },
  },
})

export const { setLastResult, clearLastResult } = lastResultSlice.actions

export default lastResultSlice.reducer

