import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const gameTimeInMs = () => {
  const epochMs = 1643122800000
  const now = Date.now()
  const msInDay = 86400000 / 2
  return {
    elapsed: (now - epochMs),
    msInDay,
    epochMs
  }
}

export const nextRound = () => {
  const {elapsed, msInDay, epochMs} = gameTimeInMs()
  const index = Math.floor(elapsed / msInDay)
  return (index+1) * msInDay + epochMs
}

export const getWordOfDay = () => {
  const {elapsed, msInDay} = gameTimeInMs()
  const index = Math.floor(elapsed / msInDay)

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
