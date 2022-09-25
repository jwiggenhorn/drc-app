import { useContext, useEffect, useState } from 'react'
import { Button } from 'react-native'
import ClickNHold from 'react-click-n-hold'
import { CaptureContext } from '../App'

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
    <ClickNHold onStart={handleStart} onEnd={handleStop}>
      <Button title={text} />
    </ClickNHold>
  )
}
