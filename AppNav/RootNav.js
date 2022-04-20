import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../Pages/MainPage';
import AddData from '../Pages/AddDataPage';
import DetailPage from '../Pages/DetailPage';
import EditDataPage from '../Pages/EditDataPage';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerLargeTitleStyle:{
            fontFamily:'promptFont'
          }
          ,
          headerStyle: {
            backgroundColor: 'grey',
          },
          headerTitleStyle:{
            fontFamily:'promptFont'
          },
          headerTitleAlign: 'center',
          headerTintColor: 'gold',
          headerBackTitle: 'Back',
        }}>
        <Stack.Screen name="home" component={MainPage} options={{ title: 'รายการข้อมูลลูกค้า' }} />
        <Stack.Screen name="add_data" component={AddData} options={{ title: 'เพิ่มข้อมูลลูกค้า' }} />
        <Stack.Screen name="detail" component={DetailPage} options={{ title: 'รายละเอียดข้อมูลลูกค้า' }} />
        <Stack.Screen name="edit_data" component={EditDataPage} options={{ title: 'แก้ไขข้อมูลลูกค้า' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;