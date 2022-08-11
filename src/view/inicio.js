import { 
    SafeAreaView, 
    StyleSheet,
    Button,
    TouchableOpacity,
    Text
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'

export default function Landing() {

    const navigation = useNavigation();
    
 return (
   <SafeAreaView style={styles.container}>
    <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('Center')}>
        <Text style={styles.text}>
            Center
        </Text>
    </TouchableOpacity>
    <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('FlexStart')}>
        <Text style={styles.text}>
            Flex Start
        </Text>
    </TouchableOpacity>
    <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('FlexEnd')}>
        <Text style={styles.text}>
            Flex End
        </Text>
    </TouchableOpacity>
    <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('SpaceBetween')}>
        <Text style={styles.text}>
            Space Between
        </Text>
    </TouchableOpacity>
    <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('SpaceAround')}>
        <Text style={styles.text}>
            Space Around
        </Text>
    </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn:{
        backgroundColor: 'purple',
        margin: 10,
        textTransform: 'uppercase',
        padding: 10
    },
    text: {
        color: 'white',
        fontWeight: '500'
    }
}) 
