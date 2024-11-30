import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1E1E1E",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
	},
	headerButton: {
		width: 45,
		height: 45,
		borderRadius: 25,
		backgroundColor: "#D4D4D4",
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 125,
		height: 75,
		resizeMode: "contain",
	},
	salaoWrapper: {
		padding: 16,
		height: "40%",
		marginBottom: 20,
	},
	chamadasWrapper: {
		padding: 16,
		height: "40%",
		marginBottom: 20,
	},
	salaoTitle: {
		fontSize: 24,
		color: "#D9D9D9",
		textAlign: "right",
		paddingEnd: 20,
	},
	chamadasTitle: {
		fontSize: 24,
		color: "#D9D9D9",
		textAlign: "right",
		paddingEnd: 20,
	},
	salaoContainer: {
		backgroundColor: "#D9D9D9",
		borderRadius: 25,
		width: "100%",
		height: "80%",
		padding: 16,
	},
	chamadasContainer: {
		backgroundColor: "#1E1E1E",
		borderRadius: 25,
		width: "100%",
		height: "100%",
		padding: 16,
	},
	salaoContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	salaoText: {
		fontSize: 16,
		color: "#000",
	},
	chamadasText: {
		fontSize: 16,
		color: "#D9D9D9",
	},
	sinoContainer: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#FFF",
		justifyContent: "center",
		alignItems: "center",
	},
	// Novo container
	bottomContainer: {
		backgroundColor: "#D9D9D9",
		height: "45%", // Adjusted height
		width: "100%",
		borderTopLeftRadius: 50,
	},
	notificationOverlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "#00000070",
		justifyContent: "center",
		alignItems: "center",
	},
	notificationNumber: {
		fontSize: 48,
		color: "#FFF",
		marginBottom: 20,
	},
	notificationText: {
		fontSize: 24,
		color: "#FFF",
		marginBottom: 20,
	},
	notificationBottom: {
		backgroundColor: "#FFF",
		width: "80%",
		padding: 20,
		borderRadius: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	notificationButtonRed: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 10,
		width: "45%",
		alignItems: "center",
	},
	notificationButtonGreen: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 10,
		width: "45%",
		alignItems: "center",
	},
	notificationButtonText: {
		color: "#FFF",
		fontSize: 16,
	},
});

export default styles;