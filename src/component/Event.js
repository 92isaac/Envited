import React, { useContext }  from 'react'
import { AppContext } from '../App'

const Event = () => {
    const { data } = useContext(AppContext)
  return (
    <div>Event: </div>
  )
}

export default Event