import React , { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import { ResultsPane } from './components/results-pane'
import Footer from './components/footer'
import { STRINGS } from './strings'
import { ButtonRow } from './components/button-row'
import firebase from './helpers/firestoreHelper'
import { LoadingState } from './components/loading-state'
import { ErrorState } from './components/error-state'

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
  const [isIndustriesLoading, setIsIndustriesLoading] = useState(true)
  const [isWildcardsLoading, setIsWildcardsLoading] = useState(true)
  const [isErrorState, setIsErrorState] = useState(false)
  const [industries, setIndustries] = useState([] as any)
  const [wildcards, setWildcards] = useState([] as any)

  useEffect( () => {
    getIndustries()
    getWildcards()
  }, [])

  const getIndustries = () => {
    firebase.db.collection('Industries').get()
      .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          setIndustries((previous: any) => ([...previous, doc.data()]))
        })
      })
      .then(() => {
        setIsIndustriesLoading(false)
      })
      .catch(err => {
        console.log(err.message)
        setIsErrorState(true)
      })
  }

  const getWildcards = () => {
    firebase.db.collection('Wildcards').get()
      .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          setWildcards((previous: any) => ([...previous, doc.data()]))
        })
      })
      .then(() => {
        setIsWildcardsLoading(false)
      })
      .catch(err => {
        console.log(err.message)
        setIsErrorState(true)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {(isIndustriesLoading || isWildcardsLoading) && <LoadingState />}
      {isErrorState && <ErrorState />}
      {!isIndustriesLoading && !isWildcardsLoading && !isErrorState && <section className="App-body">
        <h2 style={{alignSelf: 'flex-start'}}>{STRINGS.INDUSTRY_PROMPT}</h2>
        <ButtonRow
          buttons={industries}
          onClick={(index: number) => {
            setIndustryIndex(index)
            setCount(0)
            if (index >= 0 && industries.length > index && wildcardIndex >= 0 && wildcards.length > wildcardIndex){
              let newWords = generateWordPair(industries[index], wildcards[wildcardIndex])
              setWords(newWords)
            }
          }}
          selectedButtonIndex={industryIndex}
        />
        <h2 style={{alignSelf: 'flex-start'}}>{STRINGS.WILDCARD_PROMPT}</h2>
        <ButtonRow
          buttons={wildcards}
          onClick={(index: number) => {
            setWildcardIndex(index)
            setCount(0)
            if (industryIndex >= 0 && industries.length > industryIndex && index >= 0 && wildcards.length > index){
              let newWords = generateWordPair(industries[industryIndex], wildcards[index])
              setWords(newWords)
            }
          }}
          selectedButtonIndex={wildcardIndex}
        />
        <ResultsPane
          words={words}
          onClickDice={() => {
            if (industryIndex >= 0 &&
                industries.length > industryIndex &&
                wildcardIndex >= 0 &&
                wildcards.length > wildcardIndex){
              let newWords = generateWordPair(industries[industryIndex], wildcards[wildcardIndex])
              setWords(newWords)
              setCount(count+1)
            }
          }}
          easterEgg={count > 5 &&
            industryIndex >= 0 &&
            industries.length > industryIndex &&
            industries[industryIndex].Title === 'Health'}
        />
      </section>}
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App
