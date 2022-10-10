import React from 'react'
import { useSelector } from 'react-redux'
import { GameStatistic } from '../../components/GameStatistic'
import { HistoryItem } from '../../components/HistoryItem'
import { NoActive } from '../../components/noActive'

const StatisticsPage = () => {
  const statistic = useSelector((state) => state.statistic.value)
  const score = useSelector((state) => state.score.value)
  const history = useSelector((state) => state.history.value)
  const isActive = useSelector((state) => state.isActive.value)
  if (!isActive) return <NoActive/>
  return (
    <div>
      <GameStatistic statistic={statistic} score={score} />
      <HistoryItem history={history}/>
    </div>
  )
}

export default StatisticsPage
