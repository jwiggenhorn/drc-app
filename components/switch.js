import { useContext, useState } from 'react'
import { Switch } from 'react-native'
import { TimeContext } from '../App'

const data = []

export default function SwitchWrapper() {
  const { startTime } = useContext(TimeContext)
  const [isOn, setIsOn] = useState(false)

  function handleChange(e) {
    const timestamp = Date.now() - startTime
    setIsOn(e)
    data.push({ timestamp, value: e })
  }

  return <Switch value={isOn} onValueChange={handleChange} />
}
