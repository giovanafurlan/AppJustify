import { 
    View, 
    StyleSheet,  
} from 'react-native';
import Default from '../components/default';

export default function Center() {

    return (
    <View style={styles.container}>
        <Default direcao={'center'}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    }
})