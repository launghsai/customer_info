import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import AppText from './AppText'

const AppItem = ({ data, onPress, onEditPress, onDeletePress }) => {

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.itemContainer}>
            <View style={{ flex: 0.8 }}>
                <View style={styles.horizontalStyle}>
                    <View style={styles.left}>
                        <AppText >รหัสลูกค้า :</AppText>
                    </View>
                    <View style={styles.right}>
                        <AppText >{data.id}</AppText>
                    </View>
                </View>
                <View style={styles.horizontalStyle}>
                    <View style={styles.left}>
                        <AppText >ชื่อลูกค้า :</AppText>
                    </View>
                    <View style={styles.right}>
                        <AppText >{data.name}</AppText>
                    </View>
                </View>
            </View>
            <View style={styles.iconBox}>
                <TouchableOpacity onPress={onEditPress}>
                    <Feather name="edit" size={24} color="green" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDeletePress}>
                    <MaterialIcons name="delete-forever" size={30} color="#931A00" />
                </TouchableOpacity>


            </View>

        </TouchableOpacity>
    )
}

export default AppItem

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 2,
        marginVertical: 8,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 3,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    horizontalStyle: {
        flexDirection: 'row',
    },
    left: {
        flex: 0.3
    },
    right: {
        flex: 0.7
    },
    iconBox: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})
