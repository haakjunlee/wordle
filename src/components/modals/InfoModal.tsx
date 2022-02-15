import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="게임 풀이 방법" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        WORDLE을 6번 만에 맞춰보세요. 시도의 결과는 타일의 색 변화로 나타납니다.
        ㅖ는 ㅔㅔ와 같이 풀어 쓰고, ㅢ는 ㅡㅣ와 같이 풀어쓰니 주의 해 주세요!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" status="correct" />
        <Cell value="K" />
        <Cell value="S" />
        <Cell value="M" />
        <Cell value="F" />
      </div>
      <p className="text-sm text-gray-500">
        ㅎ는 '단어'에 포함되어 있으며, 제 위치에 있습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="L" />
        <Cell value="F" status="present" />
        <Cell value="R" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500">
        ㄹ은 단어에는 포함되나, 다른 위치에 있습니다.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Q" />
        <Cell value="H" />
        <Cell value="F" />
        <Cell value="M" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500">
        ㅡ는 단어에도 포함되지 않고, 어떤 위치에도 있지 않습니다.
      </p>
    </BaseModal>
  )
}
