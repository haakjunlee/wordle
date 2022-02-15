import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { BaseModal } from './BaseModal'
import { nextRound } from '../../lib/words'
import Countdown from 'react-countdown'

type Props = {
  isOpen: boolean
  handleClose: () => void
  gameStats: GameStats
  isGameDone: boolean
}

export const StatsModal = ({ isOpen, handleClose, gameStats, isGameDone }: Props) => {
  return (
    <BaseModal title="통계" isOpen={isOpen} handleClose={handleClose}>
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900">
        시도 회수 분포
      </h4>
      <Histogram gameStats={gameStats} />
      {isGameDone ? (<div className="mt-5 sm:mt-6">다음 워들 <Countdown date={nextRound()} daysInHours/></div>) : (<div className="mt-5 sm:mt-6">게임이 끝나지 않았습니다.</div>)}
    </BaseModal>
  )
}
