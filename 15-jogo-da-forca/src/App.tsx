import styled from 'styled-components'
import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'
import { KeyboardEvent, useCallback, useEffect, useState } from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`

const HangmanParts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 375px;
`

const words = ['alfie', 'fenix', 'edwirges']

function App() {

  const [wordToGuess, setWordsToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter((letter) => !wordToGuess.includes(letter))
  const correctGuesses = guessedLetters.filter((letter) => wordToGuess.includes(letter))

  const isLoser = incorrectGuesses.length >= 6
  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))
  
  const addGuessedLetters = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return
    
    setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]/)) return

      e.preventDefault()
      addGuessedLetters(key)
    }) as unknown as EventListener
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  return (
    <Wrapper>
      <HangmanParts>
        {isLoser && "Você perdeu! Atualize a página para jogar novamente!"}
        {isWinner && "Parabéns, você ganhou! Atualize a página para jogar novamente!"}
        <h2>Jogo da Forca</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord reveal={isLoser} word={wordToGuess} guessedLetters={guessedLetters} />
      </HangmanParts>
      <Keyboard disable={isLoser || isWinner} activeLetters={correctGuesses} inactiveLetters={incorrectGuesses} addGuessedLetters={addGuessedLetters} />
    </Wrapper>
  )
}

export default App
