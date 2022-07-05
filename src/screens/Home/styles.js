import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#1E90FF",
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
    },
    Body:{
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    Content: {
        justifyContent: "center",
        alignItems:"center",
        width: "100%",
        height: 700,
        backgroundColor: "#FFFFFF",
    },
    TextTitle: {
        fontSize: 30,
        fontStyle: "bold"
    }
})