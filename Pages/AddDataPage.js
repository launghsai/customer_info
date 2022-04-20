import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText, AppInput } from '../Components/index'
import { MainContext } from '../Context/index'
import MapView, { Marker } from 'react-native-maps';
import Toast from '../Components/Toast';

export default AddData = ({ navigation }) => {

    const { customerData, setCustomerData } = useContext(MainContext)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [location, setLocation] = useState({
        latitude: 13.736717,
        longitude: 100.523186,
        latitudeDelta: 0.025,
        longitudeDelta: 0.025,
    })


    const validation = () => {
        let isFound = customerData.find(item => item.id == id)
        if (!id.length) {
            Toast('กรุณาตรวจสอบรหัสลูกค้า')
            return false
        } else if (!name.length) {
            Toast('กรุณาตรวจสอบชื่อลูกค้า')
            return false
        } else if (phone.length != 10) {
            Toast('กรุณาตรวจสอบเบอร์โทร')
            return false
        } else if (!age.length) {
            Toast('กรุณาตรวจสอบอายุ')
            return false
        } else if (!location.latitude && !location.longitude) {
            Toast('กรุณาตรวจสอบที่อยู่')
            return false
        } else if (isFound) {
            Toast('รหัสลูกค้าอยู่ในระบบแล้ว')
            return false
        } else {
            return true
        }
    }
    const AddDataPress = () => {
        if (validation()) {
            let data = { id, name, phone, age, location }
            let newData = [...customerData, data]
            setCustomerData(newData)
            Toast('เพิ่มข้อมูลเรียบร้อย');
            navigation.pop()
        }
    }

    return (
        <View style={styles.container}>
            <AppInput title={'รหัสลูกค้า'} onChange={(text) => { setId(text) }} value={id} type='phone-pad' />
            <AppInput title={'ชื่อลูกค้า'} onChange={(text) => { setName(text) }} value={name} />
            <AppInput title={'เบอร์โทร'} onChange={(text) => { setPhone(text) }} value={phone} type='phone-pad' maxLength={10} />
            <AppInput title={'อายุ'} onChange={(text) => { setAge(text) }} value={age} type='phone-pad' maxLength={2} />
            <View style={styles.seperator}>
                <AppText>เลือกที่อยู่ โดยการลากหมุด</AppText>
            </View>
            <View style={styles.mapBorder}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={location}
                >
                    <Marker draggable
                        coordinate={location}
                        onDragEnd={(e) => {
                            let data = {
                                ...location,
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude,
                            }
                            setLocation(data)
                        }}
                    />
                </MapView>
            </View>
            <TouchableOpacity onPress={AddDataPress} style={styles.addButton}>
                <AppText color='white'>เพิ่มข้อมูล</AppText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
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
    },
    seperator: {
        marginTop: 15,
        marginBottom: 5
    },
    mapStyle: {
        width: '100%',
        height: 200,
        borderWidth: 1
    },
    mapBorder: {
        borderWidth: 2
    },
    addButton: {
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'green',
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
})
