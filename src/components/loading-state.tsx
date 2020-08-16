import React from 'react'
import '../App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export const LoadingState = () => {
  return <div className="Loading-container">
    <Loader
      type="TailSpin"
      color="#5da7eb"
      height={80}
      width={80}
      timeout={3000} //3 secs
    />
  </div>
}