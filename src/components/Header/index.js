import react from "react";
import { View, Text } from "react-native";
import { Styles } from "./styles";

function Header () {
    return (
        <View style={Styles.Conteiner}>
            <Text>EU SOU O CABEÇALHO</Text>
        </View>
    );
}

export default Header;