import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataCaptureContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    textAlign: 'center',
    margin: 12,
    color: 'red',
  },
  control: {
    flex: 1,
    alignItems: 'center',
  },
  modal: {
    margin: 35,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 20,
  },
  modalButtons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
