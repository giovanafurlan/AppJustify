import { 
    View, 
    StyleSheet,  
} from 'react-native';
import Default from '../components/default';

export default function FlexEnd() {

    return (
    <View style={styles.container}>
        <Default direcao={'flex-end'}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    }
})