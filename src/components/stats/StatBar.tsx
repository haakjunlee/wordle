import { GameStats } from '../../lib/localStorage'

type Props = {
  gameStats: GameStats
}

const StatItem = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => {
  return (
    <div className="items-center justify-center m-1 w-1/4">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}

export const StatBar = ({ gameStats }: Props) => {
  return (
    <div className="flex justify-center my-2">
      <StatItem label="총 시도 회수" value={gameStats.totalGames} />
      <StatItem label="성공률" value={`${gameStats.successRate}%`} />
      <StatItem label="현재 연속 성공" value={gameStats.currentStreak} />
      <StatItem label="최대 연속 성공" value={gameStats.bestStreak} />
    </div>
  )
}
