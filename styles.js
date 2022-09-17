import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  enterStudyKeyContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataCaptureContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    margin: 12,
    color: 'red',
  },
  control: {
    flex: 1,
    alignItems: 'center',
  },
})
