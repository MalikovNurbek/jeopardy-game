import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}


export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    clearHistory: (state) => {
      state.value = []
    },
  },
})

export const { addHistory, clearHistory } = historySlice.actions

export default historySlice.reducer
