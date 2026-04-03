import React, { useContext } from 'react'
import { RouterContextProvider } from 'react-router-dom'
import { ContextProvider } from '../AuthProvider/AuthProvider'

const About = () => {
  const {name}=useContext(ContextProvider)
  console.log(name)

  return (
    <div>{name}</div>
  )
}

export default About