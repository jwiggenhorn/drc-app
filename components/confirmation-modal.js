import React, { useState } from 'react'
import { View, Modal, Button } from 'react-native'

export default function ConfirmationModal() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <Text>Test Modal</Text>
      </Modal>
    </View>
  )
}
