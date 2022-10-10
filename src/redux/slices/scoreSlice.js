import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}


export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += +action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= +action.payload
    },
  },
})

export const { incrementByAmount, decrementByAmount } = scoreSlice.actions

export default scoreSlice.reducer
