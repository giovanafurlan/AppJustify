import { 
    SafeAreaView, 
    StyleSheet
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'

export default function Landing() {

    const navigation = useNavigation();
    
 return (
   <SafeAreaView style={styles.container}>
    <Button
        title="Center"
        onPress={() => navigation.navigate('Center')}
    />
    <Button
        title="Flex Start"
        onPress={() => navigation.navigate('FlexStart')}
    />
    <Button
        title="Flex End"
        onPress={() => navigation.navigate('FlexEnd')}
    />
    <Button
        title="Space Between"
        onPress={() => navigation.navigate('SpaceBetween')}
    />
    <Button
        title="Space Around"
        onPress={() => navigation.navigate('SpaceAround')}
    />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 
