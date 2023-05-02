import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const Phrases = () => {

    const currentWeather = useSelector(state => state.weather.currentWeather);

    const getRainPhrase = () => {
        const phrases = [
            "Si tenés planes para hoy, mejor llevalos a cabo adentro porque está lloviendo bastante fuerte.",
            "No te olvides de llevar un paraguas, que hoy se viene la tormenta.",
            "La lluvia está haciendo que se sienta más frío de lo que realmente está.",
            "Lindo día para quedarse en casa mirando una peli, con este clima de lluvia no dan ganas de salir."
        ];
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    };

    const getClearPhrase = () => {
        const phrases = [
            "Qué día hermoso para tomar unos mates en el parque con amigos. ¡No te olvides de ponerte protector solar!",
            "El sol está a full hoy, así que mejor llevá gorra y anteojos de sol para cuidarte. ¡Aprovechá para dar una vuelta en bici por el barrio!",
            "¡Qué ganas de tirarse a tomar sol en una reposera con una buena música de fondo! Si no tenés un lugar para hacerlo, un matecito en la terraza también puede ser una buena opción.",
        ];
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    };

    const getFewCloudsPhrase = () => {
        const phrases = [
            "Hoy el sol nos da un respiro entre las nubes, ¡a disfrutar del día con una buena mateada!",
            "Con algunas nubes, pero el día está perfecto para salir a caminar y disfrutar del paisaje.",
            "No se ve tan mal el día, pero mejor llevar un abrigo por si acaso. ¡Vamos a dar una vuelta!",
            "¡Qué bueno que no hace tanto calor! Ideal para hacer deporte o salir a tomar algo fresco con amigos.",
            "Parece que el clima está un poco indeciso, pero no hay excusa para quedarse en casa. ¡Hay que disfrutar del día!"
        ];
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    };

    const getCloudsPhrase = () => {
        const phrases = [
            "Hoy está un poco nublado, pero no es motivo para quedarse en casa. ¡Salgamos a disfrutar de un café calentito!",
            "Parece que hoy va a estar fresquito y con algunas nubes en el cielo. No te olvides de llevar una camperita por si refresca.",
            "El cielo está gris, pero eso no significa que nuestro día deba ser aburrido. ¿Qué te parece si nos vamos de paseo y disfrutamos del clima?",
            "Con este clima un tanto nublado, es el momento perfecto para hacer una sesión de fotos con un estilo más melancólico. ¡Saca tu creatividad!"
        ];
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    };

    const getSnowPhrase = () => {
        const phrases = [
            "¡Hoy parece que el cielo quiere hacernos un regalo! ¡Aprovechá y salí a disfrutar de la nieve!",
            "¿Tenés la campera de abrigo? ¡Hoy la vas a necesitar! El clima está perfecto para hacer un muñeco de nieve.",
            "Si estás planeando salir, ¡no te olvides de las botas! La nieve puede ser traicionera, pero también es divertida.",
            "¡Qué lindo que es ver la ciudad cubierta de blanco! Si tenés la oportunidad, salí a caminar y disfrutá del paisaje.",
            "¿Te acordás cuando eras chico y salías a jugar en la nieve? ¡Hoy es un buen día para volver a hacerlo!",
        ];
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    };

    const getMistPhrase = () => {
        const phrases = [
            "Cuidado con la neblina hoy, mejor salir con precaución y luces encendidas.",
            "Parece que hoy el paisaje está cubierto por un misterioso velo de neblina.",
            "Qué linda que se ve la ciudad cuando se ve desde arriba de la neblina.",
            "La niebla nos invita a movernos con calma y disfrutar del ambiente mágico que crea.",
            "Hoy es un día para abrigarse bien y tomar un té calentito para combatir la neblina.",
        ];
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    };

    switch (currentWeather.weather[0].description) {
        case "clear sky":
            phrase = getClearPhrase();
            break;
        case "few clouds":
            phrase = getFewCloudsPhrase();
            break;
        case "overcast clouds":
        case "scattered clouds":
        case "broken clouds":
            phrase = getCloudsPhrase();
            break;
        case "shower rain":
        case "rain":
        case "thunderstorm":
            phrase = getRainPhrase();
            break;
        case "snow":
            phrase = getSnowPhrase();
            break;
        case "mist":
            phrase = getMistPhrase();
            break;
        default:
            ""
            break;
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.text}>{phrase}</Text>
            </View>
            <Image source={require("../../assets/lobito.png")} style={styles.lobito} />
        </View>
    )
}

export default Phrases

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        position: 'absolute',
        bottom: 30,
        padding: 20,
        backgroundColor: "#fff",
        width: 300,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        zIndex: 5,
    },
    text: {
        textAlign: "center"
    },
    lobito: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 25,
        left: 140,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        zIndex: 5,
    }
})