import { Text, View, StyleSheet, TouchableHighlight, ScrollView, Image, ActivityIndicator, Alert } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const HasilScreen = ({ navigation, route }) => {
    const { hasil, imageResource } = route.params

    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
                <View style={{ ...styles.preview_image, marginBottom: 20 }}>
                    {imageResource ? <Image source={{uri: imageResource}} style={{ ...styles.image }} /> : <Icon name="image" style={styles.icon} />}
                </View>
                <Text style={{ ...styles.text, marginBottom: 20, fontWeight: '900', fontSize: 22, textAlign: 'center', width: '100%', paddingVertical: 10 }}>{hasil}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '100%', marginBottom: 20 }}>
                    <TouchableHighlight underlayColor='transparent' style={{ flex: 1 }} onPress={() => navigation.replace('InformasiScreen')}>
                        <Text style={styles.button}>Informasi Mutu Beras</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='transparent' style={{ flex: 1 }} onPress={() => navigation.replace('KlasifikasiScreen')}>
                        <Text style={{ ...styles.button, backgroundColor: '#E3B34C' }}>Input Ulang</Text>
                    </TouchableHighlight>
                </View>
                <Text style={{ ...styles.text, marginBottom: 20 }}>Untuk informasi lebih lanjut dapat dilihat pada halaman informasi mutu beras.</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF',
        height: '100%',
    },
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        marginHorizontal: 20,
        marginTop: 20
    },
    text: {
        color: '#0D6E72',
        fontSize: 14,
        fontWeight: '800',
        lineHeight: 18
    },
    preview_image: {
        height: 300,
        width: '100%',
        borderWidth: 1,
        borderColor: '#0D6E72',
        // borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: '#0D6E72',
        fontSize: 100
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        flex: 1,
    },
    button: {
        backgroundColor: '#0D6E72',
        width: '100%',
        // height: 40,
        paddingVertical: 15,
        verticalAlign: 'middle',
        textAlign: 'center',
        borderRadius: 10,
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700',
        justifyContent: 'center',
        marginBottom: 10,
        alignItems: 'center',
        // textTransform: 'uppercase'
    }
})

export default HasilScreen