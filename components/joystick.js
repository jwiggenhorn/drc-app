import { useRef } from 'react'
import { Animated, View, StyleSheet, PanResponder, Image } from 'react-native'

export default function Joystick({ onMove, onStop, stickImage }) {
  const pan = useRef(new Animated.ValueXY()).current
  const radius = 60

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_, gestureState) => {
      const { dx, dy } = gestureState
      const dist = Math.sqrt(dx * dx + dy * dy)
      let scale = Math.min(radius, dist) / dist
      if (isNaN(scale)) scale = 0
      pan.setValue({
        x: dx * scale,
        y: dy * scale,
      })
      onMove?.(gestureState)
    },
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        overshootClamping: true,
        useNativeDriver: false,
      }).start()
      onStop?.()
    },
  })

  return (
    <View style={styles.base}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <Image source={stickImage} style={styles.image} />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    height: 90,
    width: 90,
    backgroundColor: '#5A5A5A',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
})
