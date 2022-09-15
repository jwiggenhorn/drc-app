import { View, Button } from 'react-native';
import { styles } from '../styles';

var startTime = 0;
var stopTime = 0;

export default function ButtonLayout() {
    return (
        <View style={{ flexDirection:"row" }}>
            <StartButton/>
            <StopButton/>
        </View>
    )
}

function StartButton()
{
    return (
        <View style={styles.buttonStyle}>
            <Button title="Start" onPress={() => {startTime = Date.now(); console.log(startTime);}}></Button>
        </View>
    )
}

function StopButton()
{
    return (
        <View style={styles.buttonStyle}>
            <Button title="Stop" onPress={() => {stopTime = Date.now(); console.log(stopTime);}}></Button>
        </View>
    )
}