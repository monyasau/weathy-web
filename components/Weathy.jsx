import { Text, View, StyleSheet } from "react-native";



const apiKey="96cd14a3e691c33114bf91f357c4fcf1"
const Weathy=()=> {
    let weatherResponse;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"lagos"}&appid=${apiKey}&units=metric  `)
    .then(response => response.json())
    .then(json => weatherResponse===json)
    console.log();

    return (
        <View className="flex-1 border-b w-full">
            <Text>{weatherResponse}</Text>
        </View>
    );
}

export default Weathy;
