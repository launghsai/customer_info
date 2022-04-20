import React from 'react'
import { StyleSheet, View,TextInput } from 'react-native'
import AppText from './AppText'

const AppInput = ({ title, onChange, value, type,maxLength,notEdit }) => {

    return (
        <View style={styles.inputBox}>
            <AppText>{title}</AppText>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChange}
                keyboardType={type && type}
                maxLength={maxLength}
                editable={notEdit && false}
            />
        </View>
    )
}

export default AppInput

const styles = StyleSheet.create({

    inputBox: {
        marginVertical: 3,
    },
    textInput: {
        width: '100%',
        fontFamily: 'promptFont',
        fontSize: 16,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'grey',
        padding: 5,
        marginVertical: 5
    }
})

