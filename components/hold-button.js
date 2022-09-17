import { useContext } from 'react'
import { Button } from 'react-native'
import ClickNHold from 'react-click-n-hold'
import { TimeContext } from '../App'

export default function HoldButton({ text }) {
  const { startTime } = useContext(TimeContext)
  const data = []

  function handleStart(e) {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: true })
  }

  function handleStop(e) {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: false })
  }

  return (
    <ClickNHold onStart={handleStart} onEnd={handleStop}>
      <Button title={text} />
    </ClickNHold>
  )
}
