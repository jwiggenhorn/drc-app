import { useContext, useState, useEffect } from 'react'
import { Switch } from 'react-native'
import { CaptureContext } from '../App'

export default function SwitchWrapper({ number = 'One' }) {
  const { startTime, isCapturing, participantData } = useContext(CaptureContext)
  const [isOn, setIsOn] = useState(false)
  const [data] = useState([])

  useEffect(() => {
    participantData[`toggle${number}Inputs`] = data
  }, [isCapturing])

  function handleChange(e) {
    const timestamp = Date.now() - startTime
    setIsOn(e)
    data.push({ timestamp, value: e })
  }

  return (
    <Switch value={isOn} onValueChange={isCapturing ? handleChange : null} />
  )
}
