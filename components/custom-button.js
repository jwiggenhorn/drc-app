import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { styles } from '../styles';

TouchableOpacity.defaultProps = { activeOpacity: 0.6 }

export default function CustomButton({ onPress, title, color }) {

    function handleColor() {
        return {
            ...styles,
            elevation: 8,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
            backgroundColor : color || "#00BFFF"
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={[handleColor(), styles.shadowProp]}>
            <Text style={styles.customButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}