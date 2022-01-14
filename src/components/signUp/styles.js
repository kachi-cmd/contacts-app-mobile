import { StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 21,
        // textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 10,
        fontWeight: '500' 
    },
    subTitle: {
        fontSize: 17,
        // textAlign: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        fontWeight: '500'
    },
    createSection: {
        flexDirection: 'row'
    },
    infoText: {
        fontSize: 16
    },
    linkButton: {
        paddingLeft: 17,
        color: colors.primary,
        fontSize: 15
    },
})