import { useContext, useEffect, useState } from 'react'
import ClickNHold from 'react-click-n-hold'
import { CaptureContext } from '../App'
import Button from './custom-button'

export default function HoldButton({ text, number = 'One' }) {
  const { startTime, isCapturing, participantData } = useContext(CaptureContext)
  const [data] = useState([])

  useEffect(() => {
    participantData[`button${number}Inputs`] = data
  }, [isCapturing])

  function handleStart() {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: true })
  }

  function handleStop() {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: false })
  }

  return (
    <Button
      title={text}
      onPressIn={isCapturing ? handleStart : null}
      onPressOut={isCapturing ? handleStop : null}
    />
  )
}
