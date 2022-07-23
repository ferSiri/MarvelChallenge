import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import Characters from './Screens/Characters';
import useAuth from './hooks/useAuth';

const Tabs = createBottomTabNavigator();
    
const TabNavigator = ({navigation}: any) => {
    const auth = useAuth();
    useEffect(()=>{
        if(!auth){
            navigation.navigate("Login")
        }
    },[auth]);
    return (
        <Tabs.Navigator>
            <Tabs.Screen
            name="Home" 
            component={Characters} 
            options={{title:"Personajes"}}
            />
        </Tabs.Navigator>
    );
}

export default TabNavigator;