import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000000", // Fundo preto
		padding: 20,
		alignItems: "center",
	},

	//header
	header: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		paddingHorizontal: 50,
		paddingBottom: 20,
	},
	title: {
		fontSize: 58,
		color: "#FFF",
		fontWeight: "bold",
	},
	icones: {
		flexDirection: "row",
		paddingEnd: 100,
		paddingStart: 40,
	},
	iconBox: {
		alignItems: "center",
		marginHorizontal: 10,
	},
	iconLabel: {
		color: "#FFF",
		fontSize: 14,
		marginBottom: 5,
	},
	iconCardapio: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#FFF",
		justifyContent: "center",
		alignItems: "center",
	},

	//Container de Opções
	paymentContainer: {
		backgroundColor: "#878787",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		width: "92%",
		height: "86%",
		borderRadius: 10,
		padding: 26,
	},
	paymentMethods: {
		flexDirection: "row",
		justifyContent: "space-between",
		height: "80%",
		width: "100%",
	},
	paymentMethod: {
		backgroundColor: "#D7D0BC",
		height: "100%",
		width: "30%",
		borderRadius: 10,
		paddingHorizontal: 25,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 25,
		paddingHorizontal: 10,
	},
	pixText: {
		fontWeight: "bold",
		fontSize: 30, // ajuste o tamanho conforme necessário
	},
	paymentImage: {
		width: 100,
		height: 100,
		resizeMode: "contain",
	},
	paymentImage1: {
		width: 90,
		height: 90,
		resizeMode: "contain",
	},
	line: {
		height: 2,
		backgroundColor: "black",
		marginVertical: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	qrCodeText: {
		fontSize: 28,
		paddingHorizontal: 15,
		paddingBottom: 190,
	},
	centered: {
		alignItems: "center",
	},
	chooseButton: {
		backgroundColor: "#F3F3F3",
		padding: 10,
		alignItems: "center",
		width: "80%",
		borderRadius: 12,
	},
	chooseButtonText: {
		color: "black",
		fontSize: 24,
	},
	trocoText: {
		fontSize: 30, // ajuste conforme necessário
		marginBottom: 10, // ajuste conforme necessário
	},
	centeredContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 64,
	},
	input: {
		height: 52,
		backgroundColor: "#F3F3F3",
		borderRadius: 12,
		width: "80%",
		textAlign: "center",
		fontSize: 24,
	},

	//Total
	totalContainer: {
		marginTop: 10,
		backgroundColor: "#D7D0BC",
		width: "100%",
		height: "14%",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	totalRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	totalText: {
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "left",
		paddingRight: 150,
	},
	verticalLine: {
		width: 2,
		height: "80%",
		backgroundColor: "black",
		marginHorizontal: 10,
	},
	tipContainer: {
		alignItems: "center",
	},
	tipText: {
		fontSize: 16,
		paddingHorizontal: 50,
	},
	amountText: {
		fontSize: 24,
	},
	totalAmountContainer: {
		alignItems: "center",
	},
	totalFinalText: {
		fontSize: 18,
		paddingHorizontal: 50,
	},

	// Repetido
	bandeiras: {
		width: 55,
		height: 55,
		resizeMode: "contain",
		marginRight: 55,
		marginBottom: 25,
	},
	iconCircle: {
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	//modal
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		width: 300,
		padding: 20,
		backgroundColor: "white",
		borderRadius: 10,
		alignItems: "center",
	},
	modalText: {
		fontSize: 18,
		marginBottom: 20,
		textAlign: "center",
	},
	closeButtonText: {
		color: "white",
		fontSize: 16,
	},
	modalButtonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
	modalButton: {
		backgroundColor: "#F3F3F3",
		padding: 10,
		alignItems: "center",
		width: "45%",
		borderRadius: 12,
	},
	modalButtonText: {
		color: "black",
		fontSize: 16,
	},
});

export default styles;
