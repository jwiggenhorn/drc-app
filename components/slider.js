import { useContext, useEffect, useState } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { CaptureContext } from '../App'

export default function Slider({ vertical, style }) {
  const { startTime, isCapturing, participantData } = useContext(CaptureContext)
  const [data] = useState([])

  useEffect(() => {
    participantData[`${vertical ? 'vert' : 'horiz'}SliderInputs`] = data
  }, [isCapturing])

  function handleChange(e) {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: e[0] })
  }

  return (
    <MultiSlider
      vertical={vertical}
      containerStyle={style}
      onValuesChange={handleChange}
      max={100}
    />
  )
}
