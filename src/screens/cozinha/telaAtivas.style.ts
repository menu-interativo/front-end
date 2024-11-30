import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1E1E1E",
		alignItems: "center",
	},
	header: {
		width: "100%",
		alignItems: "flex-start",
		paddingHorizontal: 60,
	},
	logo: {
		width: 125,
		height: 125,
		resizeMode: "contain",
	},
	scrollContainer: {
		width: "100%",
		height: "75%",
	},
	scrollContent: {
		alignItems: "center",
		paddingHorizontal: 10,
	},
	superContainer: {
		flexDirection: "row", // Define rotação horizontal
	},
	square: {
		backgroundColor: "#D9D9D9",
		width: 400,
		height: 750,
		margin: 10,
		borderRadius: 20,
		alignItems: "center",
	},
	squareHeader: {
		backgroundColor: "#D7D0BC",
		width: "100%",
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		alignItems: "center",
	},
	tempoEstimado: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
	},
	row: {
		paddingHorizontal: 80,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		justifyContent: "space-between",
	},
	leftAlign: {
		textAlign: "left",
		flex: 1,
	},
	iconCenter: {
		flex: 1,
		textAlign: "center",
	},
	rightAlign: {
		textAlign: "right",
		flex: 1,
	},
	horaEstimada: {
		fontSize: 24,
		fontWeight: "600",
		color: "#000",
	},
	squareBody: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 20,
	},
	cronometro: {
		fontSize: 20,
		color: "#000",
	},
	mesa: {
		fontSize: 18,
		fontWeight: "600",
		color: "#000",
		alignSelf: "flex-start",
	},
	comandaPedidos: {
		width: "100%",
		backgroundColor: "#4C4C4C",
	},
	comandaPedidosTexto: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#D9D9D9",
		textAlign: "left",
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	itemRow: {
		flexDirection: "row",
		width: "100%",
		paddingHorizontal: 15,
	},
	itemNumber: {
		textAlign: "left",
		paddingEnd: 10,
		color: "#1E1E1E",
		fontSize: 26,
	},
	itemDescription: {
		textAlign: "right",
		color: "#1E1E1E",
		fontSize: 26,
	},
	obs: {
		backgroundColor: "#4C4C4C",
		paddingVertical: 5,
		paddingHorizontal: 15,
		width: "100%",
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
	obsText: {
		color: "#D9D9D9",
		fontSize: 20,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: "flex-end",
		width: "70%",
		padding: 10,
	},
	prontoButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#579C50",
		padding: 10,
		borderRadius: 5,
	},
	prontoButtonText: {
		color: "#D9D9D9",
		fontSize: 28,
		marginRight: 5,
	},
	prontoButtonIcon: {
		marginLeft: 5,
	},
	footer: {
		width: "100%",
		flexDirection: "row",
		padding: 20,
	},
	footerButtonText: {
		color: "#D9D9D9",
		fontSize: 28,
	},
});

export default styles;
