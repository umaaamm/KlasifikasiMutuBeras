import { Text, View, StyleSheet, TouchableHighlight, ScrollView, Image, ActivityIndicator, Alert } from "react-native"
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import axios from "axios";
import Tflite from 'tflite-react-native';

const KlasifikasiScreen = ({ navigation }) => {
    const [existImage, setExistImage] = useState(false)
    const [imageResource, setImageResource] = useState({})
    const [base64Data, setBase64Data] = useState('')
    const [isProcess, setIsProcess] = useState(false)
    const [classificationResult, setClassificationResult] = useState(null)
    const [runningTime, setRunningTime] = useState(0)
    const [urlImage, setUrlImage] = useState('')

    let tflite = new Tflite();

    const getImageFromGalery = async () => {
        const result = await launchImageLibrary({ includeBase64: true })

        setUrlImage(result.assets[0].uri)

        if (!result.didCancel) {
            setImageResource({
                uri: `data:${result.assets[0].type};base64,${result.assets[0].base64}`
            })
            setBase64Data(result.assets[0].base64)
            setExistImage(true)
        }
    }

    const getImageFromCamera = async () => {
        const result = await launchCamera({ includeBase64: true, mediaType: 'photo' })
        if (!result.didCancel) {
            setImageResource({
                uri: `data:${result.assets[0].type};base64,${result.assets[0].base64}`
            })
            setBase64Data(result.assets[0].base64)
            setUrlImage(result.assets[0].uri)
            setExistImage(true)
        }
    }


    const prosesData = async () => {
        if (urlImage) {
        setIsProcess(true)
        tflite.loadModel({
            model: 'model.tflite',// required
            labels: 'labelberas.txt',  // required
            numThreads: 1, // defaults to 1  
        },
            (err, res) => {
                if (res) {
                    tflite.runModelOnImage({
                        path: urlImage,  // required
                        imageMean: 0.0, // defaults to 127.5
                        imageStd: 255,  // defaults to 127.5
                        numResults: 2,    // defaults to 5
                        threshold: 0.2   // defaults to 0.1
                    }, (err, res) => {
                        if (res) {
                            setIsProcess(false)
                            navigation.replace('HasilScreen', {
                                hasil: res[0].label ?? null,
                                imageResource: urlImage
                            })
                        } else {
                            setIsProcess(false)
                            Alert.alert('Klasifikasi Gagal', err);
                            console.log(err);
                        }
                    });
                } else {
                    setIsProcess(false)
                    Alert.alert('Klasifikasi Gagal', err);
                    console.log('err', err);
                }
            });
        } else {
            Alert.alert('Peringatan', 'Pilih gambar terlebih dahulu');
        }
    }

    const runningProcess = async () => {
        if (base64Data.length && existImage) {
            const start = performance.now();
            setIsProcess(true)
            axios({
                method: "POST",
                url: "https://classify.roboflow.com/klasifikasi-mutu-beras/1",
                params: {
                    api_key: "akqZ2wxqwyQ6JvcsnFrU"
                },
                data: base64Data,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
                .then(function (response) {
                    setIsProcess(false)
                    // setClassificationResult(response.data)
                    // const end = performance.now();
                    // setRunningTime((end - start) / 1000)
                    navigation.replace('HasilScreen', {
                        hasil: response.data.top ?? null,
                        imageResource: imageResource
                    })
                })
                .catch(function (error) {
                    setIsProcess(false)
                    Alert.alert('Klasifikasi Gagal', error);
                });
        } else {
            Alert.alert('Peringatan', 'Pilih gambar terlebih dahulu');
        }
    }

    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
                <View style={{ ...styles.preview_image, marginBottom: 20 }}>
                    {existImage && imageResource.uri ? <Image source={imageResource} style={{ ...styles.image }} /> : <Icon name="image" style={styles.icon} />}
                </View>
                <Text style={{ ...styles.text, marginBottom: 20 }}>Pilih metode input gambar</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '100%' }}>
                    <TouchableHighlight underlayColor='transparent' style={{ flex: 1 }} onPress={getImageFromGalery}>
                        <Text style={styles.button}><Icon name="image" style={{ fontSize: 14 }} /> Galeri</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='transparent' style={{ flex: 1 }} onPress={getImageFromCamera}>
                        <Text style={styles.button}><Icon name="camera" /> Kamera</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight disabled={isProcess} underlayColor='transparent' style={{ width: '100%', marginBottom: 10 }} onPress={prosesData}>
                    {
                        isProcess ? (<View style={{ ...styles.button, backgroundColor: '#E3B34C' }}>
                            <ActivityIndicator color="#FFF" />
                        </View>)
                            :
                            (<Text style={{ ...styles.button, backgroundColor: '#E3B34C' }}><Icon name="microchip" style={{ fontSize: 14 }} /> Proses</Text>)
                    }
                </TouchableHighlight>

                {classificationResult && <Hasil classificationResult={classificationResult} />}
            </View>
        </ScrollView>
    )
}

const Hasil = ({ classificationResult }) => {
    return (
        <View>
            <Text style={{ ...styles.text, marginBottom: 10 }}>Output : <Text style={{ fontWeight: '900' }}>Beras {classificationResult.top}</Text></Text>
            {classificationResult.top == 'Mutu A' && <Text style={{ ...styles.text, marginBottom: 10 }}>Beras Mutu A adalah jenis beras premium.</Text>}
            {classificationResult.top == 'Mutu B' && <Text style={{ ...styles.text, marginBottom: 10 }}>Beras Mutu B adalah jenis beras kualitas medium.</Text>}
            {classificationResult.top == 'Mutu C' && <Text style={{ ...styles.text, marginBottom: 10 }}>Beras Mutu C adalah jenis beras kualitas rendah.</Text>}
        </View>
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
        fontWeight: '900',
        justifyContent: 'center',
        marginBottom: 10,
        alignItems: 'center',
        // textTransform: 'uppercase'
    }
})

export default KlasifikasiScreen