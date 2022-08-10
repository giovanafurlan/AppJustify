import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigation} from '@react-navigation/native';

export default function SpaceAround({route}) {

    const navigation = useNavigation();

    return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Text style={styles.voltar}>
                <AiOutlineArrowLeft/>
                Voltar
            </Text>
            <View style={styles.flexColumn}>
                Column
                <div style={styles.box}></div>
                <div style={styles.box}></div>
                <div style={styles.box}></div>
            </View>
            <View style={styles.flexRow}>
                Row
                <div style={styles.box}></div>
                <div style={styles.box}></div>
                <div style={styles.box}></div>
            </View>
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
    flexColumn:{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    box:{
        padding: 10,
        color: 'gray'
    },
    voltar:{
        color:'blue',
        margin: 20,
        fontSize: 15,
        color: 'purple'
    }
})