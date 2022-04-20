import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { AppText } from '../Components/index'
import MapView, { Marker } from 'react-native-maps';

export default DetailPage = ({ navigation, route: { params: { data } } }) => {

    const [id, setId] = useState(data.id)
    const [name, setName] = useState(data.name)
    const [phone, setPhone] = useState(data.phone)
    const [age, setAge] = useState(data.age)
    const [location, setLocation] = useState({
        latitude: parseFloat(data.location.latitude),
        longitude: parseFloat(data.location.longitude),
        latitudeDelta: 0.025,
        longitudeDelta: 0.025,
    })

    const ShowItem = ({ title, data }) => {
        return (
            <View style={styles.horiBox}>
                <View style={styles.leftBox}>
                    <AppText>{title}</AppText>
                </View>
                <AppText>:  </AppText>
                <View style={styles.rightBox}>
                    <AppText>{data}</AppText>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <ShowItem title={'รหัสลูกค้า'} data={id} />
                <ShowItem title={'ชื่อลูกค้า'} data={name} />
                <ShowItem title={'เบอร์โทร'} data={phone} />
                <ShowItem title={'อายุ'} data={age} />
                <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 5, }}>
                    <AppText bold>แผนที่ลูกค้า</AppText>
                </View>
                <View style={styles.mapBorder}>

                    <MapView
                        style={styles.mapStyle}
                        initialRegion={location}
                    >
                        <Marker coordinate={location} />
                    </MapView>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    box: {
        borderRadius: 5,
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    horiBox: {
        flexDirection: 'row',
        marginVertical: 10
    },
    leftBox: {
        flex: 0.4
    },
    rightBox: {
        flex: 0.6
    },
    mapStyle: {
        width: '100%',
        height: 200,
        borderWidth: 1
    },
    mapBorder: {
        borderWidth: 2
    },
})
