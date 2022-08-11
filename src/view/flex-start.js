import { 
    View, 
    StyleSheet,  
} from 'react-native';
import Default from '../components/default';

export default function FlexStart() {

    return (
    <View style={styles.container}>
        <Default direcao={'flex-start'}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    }
})