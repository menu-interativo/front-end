import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1E1E1E",
	},
	header: {
		paddingVertical: 30,
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
		paddingTop: 8,
		alignItems: "center",
	},
	headerText: {
		color: "#FFF",
		fontSize: 24,
	},
	iconWrapper: {
		marginLeft: "30%",
	},
	topContainer: {
		height: "40%",
		width: "100%",
		borderTopLeftRadius: 50,
	},
	centralizaTextoSalao: {
		alignSelf: "flex-end",
		paddingHorizontal: 52,
	},
	textoSalao: {
		color: "#fff",
		fontSize: 28,
	},
	horizontalLineTop: {
		width: "90%",
		height: 3,
		backgroundColor: "#fff", // Cor da linha
		alignSelf: "center",
		marginVertical: 8, // Espaçamento vertical opcional
	},
	bottomContainer: {
		flex: 1,
		backgroundColor: "#D9D9D9",
		height: "45%",
		width: "100%",
		borderTopLeftRadius: 50,
	},
	centralizaTexto: {
		paddingTop: 14,
		paddingHorizontal: 52,
	},
	textoCozinha: {
		color: "#000",
		fontSize: 28,
	},
	horizontalLine: {
		width: "90%",
		height: 3,
		backgroundColor: "#000", // Cor da linha
		alignSelf: "center",
		marginVertical: 8, // Espaçamento vertical opcional
	},
	cozinhaContainer: {
		paddingStart: 26,
	},
	textoCozinhaDentro: {
		fontSize: 18,
	},
	scrollContainer: {
		width: "100%",
	},
});

export default styles;
