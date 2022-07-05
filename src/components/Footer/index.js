import react from "react";
import { View, Text } from "react-native";
import { Styles } from "./styles";

function Footer () {
    return (
        <View style={Styles.Conteiner}>
            <View> 
                <Text>AQUI DEVE IR O LINKEDIN</Text>
            </View>
            <Text>AQUI VAI O NOME DO DEV</Text>
        </View>
    );
}

export default Footer;