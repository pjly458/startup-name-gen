import React from 'react'
import '../App.css'

type RowProps = {
  buttons: Button[],
  onClick: (buttonIndex: number) => void
  selectedButtonIndex: number
}

type Button = {
  Title: string,
  Words: string[],
}

export const ButtonRow = ({ buttons, onClick, selectedButtonIndex }: RowProps) => {
  return <div>
    {buttons.map((button: Button, index: number) => {
      return (<span key={'button-'+button.Title}>
        <button
          style={index === selectedButtonIndex ? {backgroundColor: '#6ce4bf'} :{}}
          onClick={() => {
            onClick(index)
            }}
        >
          {button.Title}
        </button>
      </span>)
    })}
  </div>
}
