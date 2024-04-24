import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18172e',
    },

    header: {
        flex: 1,
        width: '100%',
        height: 'auto',
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingBottom: '5%',
        alignItems: 'center',
    },

    headerIconLine: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
    },

    headerIconBox1: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
    },

    headerIconBox2: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
    },

    headerIcon: {
        width: 'auto',
        height: '100%',
        resizeMode: 'contain',
    },

    headerImageBox: {
        width: '100%',
        height: '60%',
    },

    imagePlanet: {
        width: 'auto',
        height: '100%',
        resizeMode: 'contain',
    },
    
    titlePlanet: {
        width: '100%',
        height: '20%',
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        alignContent: 'center',
    },

    subTitlePlanet: {
        width: '100%',
        height: '10%',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'light',
        alignContent: 'center',
    },

    mainContent: {
        flex: 1,
        width: '100%',
        height: 'auto',
        paddingRight: '10%',
        paddingLeft: '10%',
        alignItems: 'center',
    },

    mainText: {
        width: '100%',
        height: '50%',
        color: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#fff',
        borderBottomColor: '#fff',
        fontSize: '95%',
        fontWeight: 'light',
        alignContent: 'center',
    },

    galleryTitle: {
        width: '100%',
        height: '10%',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'light',
        marginTop: '5%',
        alignContent: 'center',
    },

    galleryImageLine: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
    },

    galleryImageBox1: {
        width: '45%',
        height: '80%',
    },

    galleryImageBox2: {
        width: '45%',
        height: '80%',
    },

    galleryImage: {
        width: 'auto',
        height: '100%',
        borderRadius: 22,
    },
});

export default styles;