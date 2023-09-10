import { Text, View, StyleSheet, Image, ScrollView } from "react-native"
import { BERAS_A, BERAS_B, BERAS_C } from "../assets/load/images"

const InformasiScreen = () => {
    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
                <View style={{ width: '100%', borderBottomColor: '#0D6E72', borderBottomWidth: 1 }}>
                    <Text style={{ ...styles.text, padding: 10, paddingHorizontal: 20, color: '#0D6E72', textAlign: 'left', textTransform: 'uppercase' }}>Beras Mutu A</Text>
                    <View style={{ padding: 20, display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={BERAS_A} style={{ ...styles.image, marginBottom: 20 }} />
                        <Text style={{ ...styles.text, flex: 2, textAlign: 'justify' }}>
                            Beras mutu A merupakan beras jenis beras premium. Beras ini memiliki ciri bentuk utuh, warna dominan putih terang, dan tidak mengandung unsur lain seperti gabah, batu, dan kotoran lainnya.
                        </Text>
                    </View>
                </View>

                <View style={{ width: '100%', borderBottomColor: '#0D6E72', borderBottomWidth: 1 }}>
                    <Text style={{ ...styles.text, padding: 10, paddingHorizontal: 20, color: '#0D6E72', textAlign: 'left', textTransform: 'uppercase' }}>Beras Mutu B</Text>
                    <View style={{ padding: 20, display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={BERAS_B} style={{ ...styles.image, marginBottom: 20 }} />
                        <Text style={{ ...styles.text, flex: 2, textAlign: 'justify' }}>
                            Beras mutu B merupakan beras jenis beras medium. Beras ini memiliki ciri bentuk bulir utuh dan patah. Warna pada beras ini terdiri dari warna putih terang dan putih susu. Selain itu, terdapat butir merah atau kuning pada jenis beras ini. Pada jenis beras ini tidak ditemukan kotoran.
                        </Text>
                    </View>
                </View>

                <View style={{ width: '100%', borderBottomColor: '#0D6E72', borderBottomWidth: 1 }}>
                    <Text style={{ ...styles.text, padding: 10, paddingHorizontal: 20, color: '#0D6E72', textAlign: 'left', textTransform: 'uppercase' }}>Beras Mutu C</Text>
                    <View style={{ padding: 20, display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={BERAS_C} style={{ ...styles.image, marginBottom: 20 }} />
                        <Text style={{ ...styles.text, flex: 2, textAlign: 'justify' }}>
                            Beras mutu C merupakan beras jenis beras kualitas rendah. Beras ini memiliki bentuk beras patah yang sangat mendominasi. Warna pada beras ini terdiri dari warna putih susu dan putih terang. Beras ini juga mengandung butir gabah, butir kuning dan merah. Pada sampel ini terkadang terdapat benda lain seperti batu.
                        </Text>
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
        marginTop: 20,
        marginBottom: 50
    },
    text: {
        color: '#0D6E72',
        fontSize: 14,
        fontWeight: 800,
        lineHeight: 18
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        flex: 1,
        borderRadius: 10
    }
})

export default InformasiScreen