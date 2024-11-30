// LoginStyles.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: isTablet ? "row" : "column",
		backgroundColor: "#1E1E1E",
	},
	leftContainer: {
		flex: 1.5,
		justifyContent: "center",
		alignItems: "center",
	},
	rightContainer: {
		flex: isTablet ? 1.5 : 1,
		justifyContent: "center",
		alignItems: "center", // Alinhe no centro para celular
		backgroundColor: isTablet ? "rgba(255, 255, 255, 0.05)" : "rgba(30, 30, 30)", // Fundo transparente em tablets, branco em celulares
	},
	capsula: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	formContainer: {
		width: isTablet ? "60%" : "80%", // Maior largura no tablet
		alignItems: "center",
	},
	logo: {
		width: 350,
		height: 350,
		resizeMode: "contain",
	},
	logoMobile: {
		width: 200,
		height: 200,
		resizeMode: "contain",
		marginBottom: 20, // Adicione margem para separar da logo do login
	},
	loginText: {
		color: "#FFF",
		fontSize: isTablet ? 60 : 40, // Tamanho diferente para tablet e celular
		marginBottom: 50,
		textAlign: "center",
	},
	input: {
		width: "100%",
		marginBottom: 20,
		backgroundColor: "transparent",
		color: "#FFF",
	},
	button: {
		marginTop: 20,
		width: "40%",
		backgroundColor: "#FFF",
	},
	buttonText: {
		color: "#000",
		fontSize: 16,
	},
});
