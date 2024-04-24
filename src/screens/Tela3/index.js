import React from 'react'
import { SafeAreaView, View, Text, Pressable, Image } from 'react-native'
import styles from '../../constants/styleTela3'
import MinorPlanet from '../../components/MinorPlanet'

export default function Tela3() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerIconLine}>
                    <Pressable style={styles.headerIconBox1} onPress={ () => navigation.navigate('Tela1')}>
                        <Image style={styles.headerIcon} source={require('../../assets/Left-Arrow-Icon.png')}/>
                    </Pressable>

                    <Pressable style={styles.headerIconBox2}>
                    <Image style={styles.headerIcon} source={require('../../assets/Triple-Dots-Icon.png')}/>
                    </Pressable>
                </View>

                <View style={styles.headerImageBox}>
                <MinorPlanet/>
                </View>

                <Text style={styles.titlePlanet}>Pluto</Text>
                <Text style={styles.subTitlePlanet}>The minor planet</Text>
            </View>

            <View style={styles.mainContent}>
            <Text style={styles.mainText}>
                Pluto (minor planet designation: 134340 Pluto) is a dwarf planet 
                in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. 
                It was the first and the largest Kuiper belt object to be 
                discovered. After Pluto was discovered in 1930, it was 
                declared to be the ninth planet from the Sun.
            </Text>

            <Text style={styles.galleryTitle}>Gallery</Text>
            <View style={styles.galleryImageLine}>
                <View style={styles.galleryImageBox1}>
                <Image style={styles.galleryImage} source={require('../../assets/Pluto-Surface1.png')}/>
                </View>

                <View style={styles.galleryImageBox2}>
                <Image style={styles.galleryImage} source={require('../../assets/Pluto-Surface2.png')}/>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}