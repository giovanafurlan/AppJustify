import { 
    View, 
    StyleSheet,  
} from 'react-native';
import Default from '../components/default';

export default function SpaceBetween() {

    return (
    <View style={styles.container}>
        <Default direcao={'space-between'}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    }
})