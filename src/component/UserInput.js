import React, { useContext } from 'react'
import '../assets/styles/UserInput.css'
import Button from './Button'
import { AppContext} from '../App'

const UserInput = () => {
  const { setData } = useContext(AppContext)
  return (
    <div className='user-input'>
        <form action="">
            <input type="text" placeholder='Event Name' onChange={(e)=>{setData(e.target.value)}} />
            <input type="text" placeholder='Host Name' onChange={(e)=>{setData(e.target.value)}} />
            <input type="text" placeholder='Location'onChange={(e)=>{setData(e.target.value)}} />
            <input type="date" onChange={(e)=>{setData(e.target.value)}} />
            <Button name="Next" className='btn1'/>
        </form>
    </div>
  )
}

export default UserInput