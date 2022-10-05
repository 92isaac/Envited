import React from 'react'
import '../assets/styles/UserInput.css'
import Button from './Button'

const UserInput = () => {
  return (
    <div className='user-input'>
        <form action="">
            <input type="text" placeholder='Event Name' />
            <input type="text" placeholder='Host Name' />
            <input type="text" placeholder='Location'/>
            <input type="date" />
            <Button name="Next" className='btn1'/>
        </form>
    </div>
  )
}

export default UserInput