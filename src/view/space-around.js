import { 
    View, 
    StyleSheet,  
} from 'react-native';
import Default from '../components/default';

export default function SpaceAround() {

    return (
    <View style={styles.container}>
        <Default direcao={'space-around'}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    }
})