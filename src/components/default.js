import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView 
} from 'react-native';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigation} from '@react-navigation/native';

export default function Default({direcao}) {

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Text style={styles.voltar}>
                <AiOutlineArrowLeft/>
                Voltar
            </Text>
        </TouchableOpacity>
            Column
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: direcao,
            height: 100
        }}>
            <View style={styles.box}/>
            <View style={styles.box}/>
            <View style={styles.box}/>
        </View>
        <br/>
            Row
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: direcao,
            height: 100
        }}>
            <View style={styles.box}/>
            <View style={styles.box}/>
            <View style={styles.box}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    box:{
        backgroundColor: 'purple',
        width: 10,
        height: 10
    },
    voltar:{
        color:'blue',
        fontSize: 15,
        marginBottom: 20,
        color: 'purple'
    }
})