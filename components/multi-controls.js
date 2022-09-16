export default function MultiControls({ controls }) {
  return (
    <>
      {controls.map((control) => (
        <View style={{ flex: 1, alignItems: 'center' }}>{control}</View>
      ))}
    </>
  )
}
