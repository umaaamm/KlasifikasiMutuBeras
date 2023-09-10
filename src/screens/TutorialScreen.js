import { Text, View, StyleSheet, Image, ScrollView } from "react-native"
import { LOGO_BERAS } from "../assets/load/images"
import Icon from 'react-native-vector-icons/FontAwesome';

const TutorialScreen = () => {
    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
                <View style={{ display: 'flex', 'justifyContent': 'center', marginVertical: 30, width: '100%', alignItems: 'center' }}>
                    <Image source={LOGO_BERAS} style={{ ...styles.logo }} />
                </View>
                <Text style={{ ...styles.text, marginBottom: 30, marginHorizontal: 10, textAlign: 'justify' }}>QuRice adalah aplikasi untuk mengklasifikasikan beras putih ke dalam tiga tingkatan mutu, yaitu beras mutu A, B, dan C dengan mengambil citra beras.</Text>
                <View style={{ marginBottom: 20, width: '100%' }}>
                    <Text style={{ ...styles.text, backgroundColor: '#0D6E72', padding: 10, paddingHorizontal: 20, color: '#FFF', textAlign: 'left', borderTopLeftRadius: 10, borderTopRightRadius: 10, width: '100%' }}>Tutorial</Text>
                    <View style={{ padding: 20, paddingRight: 35, borderWidth: 3, borderColor: '#0D6E72', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, width: '100%' }}>
                        <View style={{ flexDirection: 'row', display: 'flex', width: '100%', gap: 10 }}>
                            <Icon name="circle" style={{ ...styles.text, fontSize: 9 }} />
                            <Text style={{ ...styles.text, textAlign: 'justify', width: '100%' }}>
                                Klik tombol "Mulai" pada halaman splashscreen.
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', display: 'flex', width: '100%', gap: 10 }}>
                            <Icon name="circle" style={{ ...styles.text, fontSize: 9 }} />
                            <Text style={{ ...styles.text, textAlign: 'justify', width: '100%' }}>
                                Klik tombol "Mulai Klasifikasi" pada halaman utama.
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', display: 'flex', width: '100%', gap: 10 }}>
                            <Icon name="circle" style={{ ...styles.text, fontSize: 9 }} />
                            <Text style={{ ...styles.text, textAlign: 'justify', width: '100%' }}>
                                Pilih gambar beras yang akan diklasifikasikan. Gambar dapat diunggah melalui galeri atau diambil langsung melalui kamera.
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', display: 'flex', width: '100%', gap: 10 }}>
                            <Icon name="circle" style={{ ...styles.text, fontSize: 9 }} />
                            <Text style={{ ...styles.text, textAlign: 'justify', width: '100%' }}>
                                Klik proses, maka hasil akan keluar pada halaman hasil.
                            </Text>
                        </View>
                    </View>
                </View>
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
        fontWeight: 800,
        lineHeight: 18
    },
    image: {
        height: 100,
        width: '100%',
        resizeMode: 'contain',
        flex: 1,
        borderWidth: 1,
        borderColor: '#0D6E72',
        borderRadius: 10
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
    },
})

export default TutorialScreen