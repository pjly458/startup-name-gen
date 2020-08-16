import React from 'react'
import '../App.css'
import { STRINGS } from '../strings'

export const ErrorState = () => {
  return <div className="Error-container">
    <h2>{STRINGS.ERROR}</h2>
  </div>
}