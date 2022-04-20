import Toast from 'react-native-root-toast'

const toast = (message, color) => {
    Toast.show(message, {
        duration: 1000,
        position: Toast.positions.BOTTOM,
        opacity: 0.6,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: color ? color : 'black'
    })
}
export default toast
