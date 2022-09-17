import { useContext } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { TimeContext } from '../App'

export default function Slider({ vertical, style }) {
  const { startTime } = useContext(TimeContext)
  const data = []

  function handleChange(e) {
    const timestamp = Date.now() - startTime
    data.push({ timestamp, value: e[0] })
  }

  return (
    <MultiSlider
      vertical={vertical}
      containerStyle={style}
      onValuesChange={handleChange}
      onValuesChangeFinish={() => console.log(data)}
      max={100}
    />
  )
}
