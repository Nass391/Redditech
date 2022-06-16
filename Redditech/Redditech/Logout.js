import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Button } from 'react-native'
export default function Logout() {
    
    const logout = async()=>{
        try{
            await AsyncStorage.removeItem('@accessToken')
        } catch(err){
            console.error(err)
        }
    }


    return ( 
        <Button 
            disabled={!request}
            title=  "Logout"
            onPress={() => { promptAsync ()}}
        />     
    )
}