import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
    },
    header: {
        paddingVertical: 38,
        paddingHorizontal: 8,
    },
    visual: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerButton: {
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
    },
    headerTextSupport: {
        paddingTop: 16,
        alignItems: "center",
    },
    headerText: {
        color: "#FFF",
        fontSize: 24,
    },
    iconWrapper: {
        marginLeft: "30%",
    },
    bottomContainer: {
        backgroundColor: "#D9D9D9",
        height: "100%",
        width: "100%",
        borderTopLeftRadius: 50,
    },
    centralizaTexto: {
        alignItems: "center",
        paddingVertical: 8,
    },
    textoMesas: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
    },
    mesasAssociadas: {
        paddingStart: 16,
    },
    textoTesto: {
        fontSize: 18,
    },
});

export default styles;