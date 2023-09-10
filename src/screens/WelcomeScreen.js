import { Text, View, StyleSheet, Image, TouchableHighlight } from "react-native"
import { LOGO_BERAS } from "../assets/load/images"

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image source={LOGO_BERAS} style={{ ...styles.logo, marginBottom: 30 }} />
                <Text style={{ ...styles.textTitle, marginBottom: 30 }}>QuRice</Text>
                <View>
                    <TouchableHighlight underlayColor='transparent' onPress={() => { navigation.push('KlasifikasiScreen') }}>
                        <Text style={styles.button}>Mulai Klasifikasi</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='transparent' onPress={() => { navigation.push('InformasiScreen') }}>
                        <Text style={styles.button}>Informasi Mutu Beras</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='transparent' onPress={() => { navigation.push('TutorialScreen') }}>
                        <Text style={styles.button}>Tutorial Aplikasi</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(255, 255, 255)',
        height: '100%',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginHorizontal: 20,
    },
    textTitle: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '900',
    },
    textDescription: {
        color: '#000000',
        textAlign: 'justify',
        fontSize: 18,
        marginHorizontal: 25
    },
    logo: {
        height: '20%',
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#0D6E72',
        width: 300,
        // height: 40,
        paddingVertical: 15,
        verticalAlign: 'middle',
        textAlign: 'center',
        borderRadius: 10,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontSize: 14,
        // fontWeight: '900',
        marginBottom: 30
    }
})

export default WelcomeScreen