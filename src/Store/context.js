import React from 'react'
import randomData from './randomData'

const ListContext = React.createContext()

export function ContextProvider({ children }) {
  const [activityList, setActivityList] = React.useState(randomData)
  return (
    <ListContext.Provider value={{ activityList, setActivityList }}>
      {children}
    </ListContext.Provider>
  )
}
