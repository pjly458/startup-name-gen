import React from 'react'
import '../App.css'
import { STRINGS } from '../strings'

class Header extends React.Component {
  render() {
    return <h1>{STRINGS.TITLE}</h1>
  }
}

export default Header