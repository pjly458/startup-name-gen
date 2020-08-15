import React , { useState } from 'react'
import './App.css'
import Header from './components/header'
import { ResultsPane } from './components/results-pane'
import Footer from './components/footer'
import { INDUSTRIES, WILDCARDS, STRINGS} from './strings'
import { ButtonRow } from './components/button-row'

type WordGroup = {
  Title: string,
  Words: string[],
}

function getRandomWord(wordGroup: WordGroup) {
  const numberOfWords = wordGroup.Words.length
  const index = Math.floor(Math.random() * numberOfWords)
  return wordGroup.Words[index]
}

function generateWordPair(industryWords: WordGroup, wildcardWords: WordGroup) {
  const industryWord = getRandomWord(industryWords)
  const wildcardWord = getRandomWord(wildcardWords)
  return [industryWord, wildcardWord]
}

function App() {
  const [count, setCount] = useState(0)
  const [industryIndex, setIndustryIndex] = useState(-1)
  const [wildcardIndex, setWildcardIndex] = useState(-1)
  const [words, setWords] = useState([''])


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="App-body">
        <h2 style={{alignSelf: 'flex-start'}}>{STRINGS.INDUSTRY_PROMPT}</h2>
        <ButtonRow
          buttons={INDUSTRIES}
          onClick={(index: number) => {
            setIndustryIndex(index)
            setCount(0)
            if (index >= 0 && wildcardIndex >= 0){
              let newWords = generateWordPair(INDUSTRIES[index], WILDCARDS[wildcardIndex])
              setWords(newWords)
            }
          }}
          selectedButtonIndex={industryIndex}
        />
        <h2 style={{alignSelf: 'flex-start'}}>{STRINGS.WILDCARD_PROMPT}</h2>
        <ButtonRow
          buttons={WILDCARDS}
          onClick={(index: number) => {
            setWildcardIndex(index)
            setCount(0)
            if (industryIndex >= 0 && index >= 0){
              let newWords = generateWordPair(INDUSTRIES[industryIndex], WILDCARDS[index])
              setWords(newWords)
            }
          }}
          selectedButtonIndex={wildcardIndex}
        />
        <ResultsPane
          words={words}
          onClickDice={() => {
            let newWords = generateWordPair(INDUSTRIES[industryIndex], WILDCARDS[wildcardIndex])
            setWords(newWords)
            setCount(count+1)
          }}
          easterEgg={count > 5 && industryIndex === 0}
        />
      </section>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App
