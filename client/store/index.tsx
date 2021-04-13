import React, { createContext, useState } from 'react'

interface Context {
  url: string
  analysis: never[]
  storeUrl: (url: string) => void
  storeAnalysis: (analysis: []) => void
}

export const Context = createContext<Context>({
  url: '',
  analysis: [],
  storeUrl: () => {},
  storeAnalysis: () => {},
})

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => {
  const [url, setUrl] = useState('')
  const [analysis, setAnalysis] = useState([])

  const storeUrl = (url: string) => {
    setUrl(url)
  }

  const storeAnalysis = (analysis: []) => {
    setAnalysis(analysis)
  }

  return (
    <Context.Provider value={{ url, analysis, storeUrl, storeAnalysis }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
