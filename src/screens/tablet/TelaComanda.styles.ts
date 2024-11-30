import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		padding: 10,
		flexDirection: "column",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		paddingHorizontal: 100,
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
	iconCircle: {
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	iconCardapio: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#FFF",
		justifyContent: "center",
		alignItems: "center",
	},
	containerComanda: {
		width: "95%",
		height: "82%",
		borderRadius: 10,
		padding: 20,
		backgroundColor: "#E2E1E1",
		alignSelf: "center",
		flexDirection: "row",
	},
	innerContainer: {
		width: "90%",
	},
	itemsDetails: {
		flexDirection: "row",
	},
	priceText: {
		fontSize: 16,
		color: "#000",
		paddingLeft: 38,
	},
	priceText1: {
		fontSize: 16,
		color: "#000",
		paddingLeft: 418,
	},
	priceText2: {
		fontSize: 16,
		color: "#000",
		paddingLeft: 100,
	},
	priceText3: {
		fontSize: 16,
		color: "#000",
		paddingLeft: 95,
	},
	priceText4: {
		fontSize: 16,
		color: "#000",
		paddingLeft: 130,
	},
	itemContainer: {
		flexDirection: "column",
		width: "100%",
		backgroundColor: "#D7D0BC",
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
	},
	itemDados: {
		flexDirection: "row",
		alignItems: "center",
	},
	itemIndex: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
		marginRight: 10,
	},
	itemDetails: {
		flex: 3,
		justifyContent: "center",
		marginHorizontal: 10,
	},
	itemContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	image: {
		width: 100,
		height: 90,
		marginRight: 10,
		borderTopLeftRadius: 17,
		borderTopRightRadius: 17,
		borderBottomLeftRadius: 17,
		borderBottomRightRadius: 36,
	},
	textContainer: {
		flex: 1,
	},
	itemTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
	},
	itemDescription: {
		fontSize: 16,
	},
	itemQuantity: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	quantityText: {
		fontSize: 18,
		color: "#FFF",
		fontWeight: "bold",
	},
	itemPrice: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	totalText: {
		fontSize: 22,
		color: "#000",
	},
	itemStatus: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000",
		borderRadius: 10,
		padding: 8,
		width: 240,
	},
	statusText: {
		fontSize: 28,
	},
	totalContainer: {
		position: "absolute",
		bottom: 10,
		right: 75,
		backgroundColor: "#F3F3F3",
		borderRadius: 15,
		paddingVertical: 5,
		paddingHorizontal: 50,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	totalAmount: {
		fontSize: 30,
	},
	circle: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#990E0E",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default styles;
