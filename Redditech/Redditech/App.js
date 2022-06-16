import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Auth from './Api.js'; 
import {Ionicons} from "@expo/vector-icons"; 
import Login from "./Login.js";
import {Home} from "./Home.js";
import {Profile} from "./Profile.js"
import {createStackNavigator} from "@react-navigation/stack";
import Search from "./Searchbar";
import { useState } from 'react';
import PostSubreddit from './PostSubreddit';
import {Post}from './Post';

WebBrowser.maybeCompleteAuthSession();
const Tab = createBottomTabNavigator();
const API = new Auth();  
export function StackWrapper() {

const [isLogging, setIsLogging] = useState();
//<Login />
    return (
     
          <Tab.Navigator style={styles.suii}
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    if (route.name === 'Home') {
                        return (
                            <Ionicons
                                name={'ios-home-outline'}
                                size={size}
                                color={color}
                            />);
                    } else if (route.name === 'Profil') {
                        return (
                            <Ionicons
                                name={'person-outline'}
                                size={size}
                                color={color}
                            />);
                    } else if (route.name === 'Login') {
                        return (
                            <Ionicons
                                name={'log-in-outline'}
                                size={size}
                                color={color}
                            />);
                    } else if (route.name === 'Chercher') {
                        return (
                            <Ionicons
                                name={'ios-search-outline'}
                                size={size}
                                color={color}
                            />);
                    }
                },
                
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'orange',
            })}>
            <Tab.Screen name="Home" component={Home} initialParams={{api: API}}/>
            <Tab.Screen name="Login" component={Login}initialParams={{api: API}}/>
            <Tab.Screen name="Chercher" component={Search} initialParams={{api: API}}/>
            <Tab.Screen name="Profile" component={Profile} initialParams={{api: API}}/>
             </Tab.Navigator>
     
         
            
    )
}
export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen options={{ title: 'Redditech' }} name='App' component={StackWrapper}/>
                <Stack.Screen options={{ title: 'Redditech' }} name="Post" component={(Post)} initialParams={{api: API}}/>
                <Stack.Screen options={{ title: 'Redditech' }} name="PostSubreddit" component={(PostSubreddit)} initialParams={{api: API}}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({
    settingsSwitch: {
        flexDirection: "row",
        marginTop: 100,
    },
    logo: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "#1A1A1B"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#ff0000"
    },
  /*  image: {
        flex: 1,
        height: undefined,
        width: undefined
    },*/
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    active: {
        backgroundColor: "#FF0000",
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
        marginTop: 52
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
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 23,
        top: '-10%',
        color: 'white',
        fontWeight: 'bold',
    },
    suii: {
       backgroundColor: '#1A1A1B'
    },
   
    
});

 

 
