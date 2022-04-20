import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const AppText = (props) => {

    const { children, style, bold } = props

    return (
        <View>
            <Text style={[
                styles.textStyle,
                style,
                { color: props.color ? props.color : 'black' },
                bold && { fontFamily: 'promptFontBold' }
            ]}>{children}</Text>
        </View>
    )
}

export default AppText

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'promptFont',
        textAlignVertical: 'center',
    }
})
