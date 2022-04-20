import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const Loading = ({ loading }) => {
  return (
    loading &&
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator size='large' color={'white'} />
      </View>
    </View>
  )
}
export default Loading

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000030',
    position: 'absolute',
    zIndex: 999
  },
  activityIndicatorWrapper: {
    backgroundColor: '#00000080',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 999
  }
})
