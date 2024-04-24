import { Image } from 'react-native'
import Pluto from "../../assets/Pluto.png"
import styles from "../../constants/styleTela3"

export default function MinorPlanet() {
    return (
        <Image style={styles.imagePlanet} source={Pluto}/>
    )
}