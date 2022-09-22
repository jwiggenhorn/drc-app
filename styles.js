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
  modal: {
    margin: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 35,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alighItems: 'center',
    marginTop: 60,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 15,
  },
  modalButton: {
    padding: 5,
    width: 1,
    alignItems: 'center',
  },
})
