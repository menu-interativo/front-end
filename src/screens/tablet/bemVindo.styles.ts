import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#E0AD40",
		padding: 10,
	},
	leftContainer: {
		marginRight: 25,
	},
	image: {
		height: "100%",
	},
	rightContainer: {
		width: "58%",
	},
	switchContainer: {
		alignItems: "flex-end", // Alinha o switch à direita
	},
	title: {
		fontSize: 32,
		fontFamily: "Inder_400Regular", // Fonte customizada
	},
	text: {
		fontSize: 24,
		textAlign: "justify",
		marginBottom: 10,
		fontFamily: "Inder_400Regular", // Fonte customizada
	},
	smallText: {
		fontSize: 26,
		textAlign: "center",
		marginBottom: 20,
		fontFamily: "Inder_400Regular", // Fonte customizada
	},
	button: {
		backgroundColor: "#000",
		borderRadius: 5,
		alignItems: "center",
		paddingVertical: 10,
		width: "35%",
		alignSelf: "center", // Centraliza o botão horizontalmente
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default styles;
