import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import KlasifikasiScreen from '../screens/KlasifikasiScreen';
import InformasiScreen from '../screens/InformasiScreen';
import TutorialScreen from '../screens/TutorialScreen';
import SplashScreen from '../screens/SplashScreeen';
import HasilScreen from '../screens/HasilScreen';

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='SplashScreeen'>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="KlasifikasiScreen" component={KlasifikasiScreen} options={{
                title: 'Halaman Klasifikasi',
                headerStyle: {
                    backgroundColor: '#FFF',
                }, headerTintColor: '#0D6E72',
            }} />
            <Stack.Screen name="InformasiScreen" component={InformasiScreen} options={{
                title: 'Informasi Mutu Beras',
                headerStyle: {
                    backgroundColor: '#FFF',
                }, headerTintColor: '#0D6E72',
            }} />
            <Stack.Screen name="TutorialScreen" component={TutorialScreen} options={{
                title: 'Halaman Tutorial',
                headerStyle: {
                    backgroundColor: '#FFF',
                }, headerTintColor: '#0D6E72',
            }} />
            <Stack.Screen name="HasilScreen" component={HasilScreen} options={{
                title: 'Hasil',
                headerLeft: null,
                headerBackVisible: false,
                headerStyle: {
                    backgroundColor: '#FFF',
                }, headerTintColor: '#0D6E72',
            }} />
        </Stack.Navigator>
    )
}

export default Navigation