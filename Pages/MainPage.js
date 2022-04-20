import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { AppText, AppItem, AppBone, Loading } from '../Components/index'
import { MainContext } from '../Context/index'
import { Ionicons } from '@expo/vector-icons';

export default MainPageData = ({ navigation }) => {

    const { customerData, setCustomerData } = useContext(MainContext)
    const [loading, setLoading] = useState(true)
    const [loadMore, setLoadMore] = useState(false)

    useEffect(() => {
        loadTime()
    }, [])

    const addPress = () => {
        navigation.push('add_data')
    }
    const itemPress = (item) => {
        navigation.push('detail', { data: item })
    }
    const editPress = (item) => {
        navigation.push('edit_data', { data: item })
    }
    const deletePress = (item) => {
        Alert.alert(
            'ยืนยันการลบข้อมูล',
            `คุณต้องการลบข้อมูล ${item.name} หรือไม่?`,
            [
                { text: "ยกเลิก", onPress: null },
                {
                    text: "ตกลง", onPress: () => {
                        let newData = customerData.filter((data) => data.id != item.id)
                        setCustomerData(newData)
                    }
                }
            ]
        );
    }
    const loadTime = () => {
        //just for loading time
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }
    const loadingMore = () => {
        //just for loading time
        setTimeout(() => {
            setLoadMore(false)
        }, 300)
    }
    const emptyView = () => {
        return (
            <View style={styles.empty}>
                <AppText>ไม่มีข้อมูลลูกค้า</AppText>
            </View>
        )
    }

    const footerView = () => {
        return (
            <>
                {
                    loadMore &&
                    <View style={styles.footer}>
                        <ActivityIndicator size="large" color={'blue'} />
                    </View>
                }
            </>
        )
    }

    return (

        <View style={styles.container}>
            {
                !loading &&
                <FlatList
                    data={customerData}
                    renderItem={({ item }) =>
                        <AppItem
                            data={item}
                            onPress={() => itemPress(item)}
                            onEditPress={() => editPress(item)}
                            onDeletePress={() => deletePress(item)}
                        />}
                    ListEmptyComponent={emptyView}
                    ListFooterComponent={footerView}
                    keyExtractor={(item) => item.id.toString()}
                    removeClippedSubviews={true}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    onEndReachedThreshold={0}
                    onEndReached={() => {
                        setLoadMore(true)
                        loadingMore()
                        //loadMoreData
                        //Actually, it should be loaded by Pages from API, but data is not much enough to render.
                    }}
                />
            }

            <TouchableOpacity onPress={addPress} style={styles.addButton}>
                <Ionicons name="add-circle-sharp" size={60} color="grey" />
            </TouchableOpacity>
            <Loading loading={loading} />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    addButton: {
        position: 'absolute',
        right: 20,
        bottom: 60
    },
    empty: {
        marginTop: 20,
        alignSelf: 'center'
    },
    footer: {
        alignSelf: 'center',
        margin: 10
    }
})
