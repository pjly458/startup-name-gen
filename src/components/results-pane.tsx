import React, { useState }from 'react'
import '../App.css'
import { STRINGS } from '../strings'
import dice from '../assets/img/dice.png'
import swap from '../assets/img/swap.png'

type ResultsPaneProps = {
  words: String[], 
  onClickDice: () => void
  easterEgg: boolean
}

export const ResultsPane = ({words, onClickDice, easterEgg}: ResultsPaneProps) => {
  const [switched, setSwitched] = useState(false)
  let emptyState = true
  if (words.length === 2) {
    emptyState = false
  }

  return <div className="Results-pane"> 
    <p>
      {emptyState ? STRINGS.RESULT_PLACEHOLDER : STRINGS.RESULT}
    </p>
    {!emptyState && !easterEgg && <h1>{words[switched ? 0 : 1]} {words[switched ? 1 : 0]}</h1>}
    {easterEgg && <h1>{STRINGS.HABITUAL}</h1>}
    <button
      style={{backgroundColor: '#5da7eb'}}
      disabled={emptyState || easterEgg}
      onClick={() => {onClickDice()}}>
      <img style={{height: '48px'}} src={dice} alt="Roll Again" />
    </button>
    <button
      style={{backgroundColor: '#5da7eb'}}
      disabled={emptyState || easterEgg}
      onClick={() => {setSwitched(!switched)}}>
      <img style={{height: '48px'}} src={swap} alt="Switch Words" />
    </button>
  </div>
}