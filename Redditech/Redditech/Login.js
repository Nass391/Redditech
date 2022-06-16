
import * as React from 'react';
import {
    Button,StyleSheet,View,FlatList,Text,Image,TouchableOpacity,SafeAreaView,ScrollView,Switch
} from 'react-native';
import {useEffect, useState} from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {makeRedirectUri, useAuthRequest} from 'expo-auth-session';
import Auth from './Api.js';


const url = {
    authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize',
    tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
};

export default function Login({route, navigation}) {
    const {api} = route.params;
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: 'flfpmF1DL1LgpC6fDCRpuA',
            scopes: Auth.scopes,
            redirectUri: makeRedirectUri({
                native: 'redditech://redirect',
            }),
        },
        url
    );
    

    useEffect(() => {
        if (response?.type === 'success') {
            const {code} = response.params;
            api.getAccessToken(code).then((token) => {
                navigation.navigate('Acceuil')
            })
        }
    }, [response]);

    return (
        <SafeAreaView style={styles.suii} >
            <View style={styles.logo}>
                <Image style={styles.tlogo}
                    source={require('./assets/Login.png')}
                />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={() => promptAsync() }>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    settingsSwitch: {
        flexDirection: "row",
        marginTop: 32,
    },
    logo: {
        marginTop: 100,
        padding: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tlogo: { 
     width: 400,
     height: 200
     
 
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#52575D"
    },
    image: {
        height: undefined,
        width: undefined
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    containerButton: {
        marginTop: 200,
        margin: 10
    },
    button: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: 'orange',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'red',
        borderWidth: 1
    },
    buttonText: {
        fontSize: 23,
        top: '-10%',
        color: 'white',
        fontWeight: 'bold',
    },
  
    
});



// import React from 'react'
// import { Button } from 'react-native'
// import * as WebBrowser from 'expo-web-browser';
// import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
// import axios from 'axios';
// import buffer from 'buffer';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Buffer = buffer.Buffer;
// WebBrowser.maybeCompleteAuthSession();

// export default function Login() {
//     const discovery = {
//         authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize',
//         tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
//     };
//     const config = {
//         clientId: 'ZDZ1VTmnfjPD-1bwE_uGkA',
//         scopes: ['*'],
//         redirectUri: makeRedirectUri({
//             // For usage in bare and standalon
//             native: 'exp://localhost:19000',
//         })
//     };
//     const [request, response, promptAsync] = useAuthRequest(config, discovery);
    
//     React.useEffect(() => {
//         if (response?.type === 'success') {
//             console.log("1/ RAW RESPONSE", response);
//             getToken();
//         }
//     }, [response]);
    
//     const getToken = async () => {
//         try {
//             console.log("2/ REPONSE CODE", response, config.redirectUri);
//             const { code } = response.params;
//             console.log("3/ ACCESS TOKEN");
//             try {
//                 const encodeClentId = Buffer.from(config.clientId + ':').toString('base64')
//                 // const responseToken = await AuthSession.exchangeCodeAsync(accessToken, { tokenEndpoint: discovery.tokenEndpoint });
//                 const params = `grant_type=authorization_code&code=${code}&redirect_uri=${config.redirectUri}`
//                 const resp = await axios.post(discovery.tokenEndpoint, params, {
//                     headers: {
//                         'Authorization': 'Basic ' + encodeClentId,
//                         'Content-Type': 'application/x-www-form-urlencoded'
//                     }
//                 })
// A METTTRE DAs
//                 console.log("4/ RESPONSE TOKEN", resp.data.access_token);
//                 try {
//                     await AsyncStorage.setItem('@accessToken', resp.data.access_token)
//                     // get token
//                     try {
//                         const value = await AsyncStorage.getItem('@accessToken')
//                         if(value !== null){
//                             console.log(value);
//                         }
//                     } catch (e) {
//                         console.error(e)
//                     }

//                 } catch(e){
//                     console.error(e)
//                 }
//             } catch (e) { console.error(e) }
//         } catch (err) {
//             console.log(err);
//         };
//     };
//     return (
//         <>
//             <Button 
//                 disabled={!request}
//                 title=  "Login"
//                 onPress={() => { promptAsync ()}}
//             />
//         </>     
//     )
//  } 




