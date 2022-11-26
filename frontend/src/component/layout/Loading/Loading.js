import React from 'react'
import { Spinner } from 'bootstrap-react'
import "./Loading.css";
const Loading = () => {
  return (
    <div><Spinner className='load'  size="md" color="secondary"/></div>
  )
}

export default Loading