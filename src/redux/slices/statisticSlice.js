import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const statiscticSlice = createSlice({
  name: 'statistic',
  initialState,
  reducers: {
    createStatistic: (state) => {
      state.value = {
        id: Date.now(),
        games: 0,
        wins: 0,
        loses: 0,
        score: 0,
        createDate: new Date().toLocaleString(),
      }
    },
    clearStatistic: (state) => {
      state.value = null
    },
    onTrueAnswer: (state, action) => {
      state.value.games += 1,
      state.value.wins += 1,
      state.value.score += action.payload
    },
    onFalseAnswer: (state, action) => {
      state.value.games += 1
      state.value.loses += 1
      state.value.score -= action.payload
    },

  },
})

export const { createStatistic, clearStatistic, onTrueAnswer, onFalseAnswer } = statiscticSlice.actions

export default statiscticSlice.reducer
