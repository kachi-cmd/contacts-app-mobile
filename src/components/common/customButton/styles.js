import { StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
    wrapper:{
        height: 42,
        // borderWidth:1,
        // borderRadius:4,
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginVertical: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    loaderSection: {
       flexDirection : 'row'  
     },
    textInput: {
        flex:1,
        width: '100%'
    },
    error: {
        Color: colors.danger,
        paddingTop: 4, 
        fontSize: 12
    }
})