import {
    StyleSheet,View,FlatList,Text,Image,TouchableOpacity,SafeAreaView,ScrollView,Switch
} from 'react-native';
import * as React from 'react'

export default function Card() {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text>okok</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 0,
        borderWidth: 1,
        elevation: 3,
        backgroundColor: 'orange',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#orange',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
    },
    cardContent: {

    }
})