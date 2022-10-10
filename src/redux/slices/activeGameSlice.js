import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const ActiveGameSlice = createSlice({
  name: 'isActive',
  initialState,
  reducers: {
    changeActive: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeActive } = ActiveGameSlice.actions

export default ActiveGameSlice.reducer
