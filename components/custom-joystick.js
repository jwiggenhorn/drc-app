import { useRef } from 'react'
import { Animated, View, StyleSheet, PanResponder, Image } from 'react-native'

export default function Joystick({ onMove, onStop, stickImage }) {
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const x =
        Math.abs(gestureState.dx) > 50
          ? Math.sign(gestureState.dx) * 50
          : gestureState.dx
      const y =
        Math.abs(gestureState.dy) > 50
          ? Math.sign(gestureState.dy) * 50
          : gestureState.dy
      pan.setValue({ x, y })
      onMove?.(gestureState)
      // Animated.event(
      //   [
      //     null,
      //     {
      //       dx: pan.x,
      //       dy: pan.y,
      //     },
      //   ],
      //   {
      //     listener: (_, gestureState) => onMove?.(gestureState),
      //     useNativeDriver: false,
      //   }
      // )
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
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
      }}
      {...panResponder.panHandlers}
    >
      <Image
        source={{
          uri: stickImage,
        }}
        style={styles.image}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    // borderColor: '#5A5A5A',
    // borderWidth: 20,
    // borderRadius: 100,
  },
})
