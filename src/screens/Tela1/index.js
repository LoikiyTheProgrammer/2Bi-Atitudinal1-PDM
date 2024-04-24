import React from 'react'
import styles from '../../constants/styleTela1'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Tela1() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigation}>
                <Pressable style={styles.navButton} onPress={ () => navigation.navigate('Tela3')}>
                    <Text style={styles.navButtonText}>Entrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}