import { combineReducers, configureStore } from '@reduxjs/toolkit'
import scoreReducer from './slices/scoreSlice'
import statisticReducer from './slices/statisticSlice'
import activeGameReducer from './slices/activeGameSlice'
import historyReducer from './slices/historySlice'
import lastResultReducer from './slices/lastResultSlice'

const rootReducer = combineReducers({
  score: scoreReducer,
  statistic: statisticReducer,
  isActive: activeGameReducer,
  history: historyReducer,
  lastResult: lastResultReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
