import react from "react";
import { View, Text } from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Styles } from "./styles";

function Home () {
    return(
        <View style={Styles.Container}>
            <View  style={Styles.Body}>
                {/* 
                Foi usado o modelo de componentisação para CABEÇALHO e RODAPÉ.
                Para dar o exemplo de que uma tela deve ser quebrada em componentes quando for possivel aplicar 
                */}
                <Header />
                
                {/*             
                No corpo da tela também poderia ter sido usado um componente, mas optei pode deixar uma view com o conteúdo
                para mostrar outra forma de construir a tela. 
                */}
                <View style={Styles.Content}>
                    <Text style={Styles.TextTitle}>Oi eu sou o seu Primeiro APP</Text>
                </View>

            </View>
            <Footer />

        </View>
    );
}

export default Home;