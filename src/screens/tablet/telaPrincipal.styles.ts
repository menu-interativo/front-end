import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},

	// Adiciona um container principal que organiza o layout em duas colunas
	mainContainer: {
		flexDirection: "row",
		width: "100%",
		height: "100%",
	},

	// Sidebar ocupando a esquerda
	sidebarContainer: {
		width: "20%", // Largura da sidebar (ajuste conforme necessário)
		backgroundColor: "#202020", // Cor de fundo da sidebar
		padding: 20,
	},

	// Conteúdo à direita (header e cards)
	contentContainer: {
		width: "80%", // O restante da tela
		backgroundColor: "#000",
		padding: 20,
	},

	headerContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		marginTop: 40,
	},

	title: {
		fontSize: 60,
		fontWeight: "bold",
		color: "white",
	},

	iconContainer: {
		flexDirection: "row",
		alignItems: "center",
	},

	iconWrapper: {
		backgroundColor: "white",
		borderRadius: 50,
		padding: 15,
		marginRight: 25,
	},

	icon: {
		width: 35,
		height: 35,
		margin: -5,
	},

	iconColumn: {
		alignItems: "center",
	},

	comandaBadge: {
		width: 25,
		height: 25,
		borderRadius: 25,
		position: "absolute",
		top: -10,
		right: -5,
		backgroundColor: "#B3261E",
		color: "white",
	},

	cardContainer: {
		width: "100%", // Agora ocupa toda a largura do contentContainer
		backgroundColor: "#878787",
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 15,
		alignItems: "center",
		marginTop: 20,
	},

	scrollView: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
});

export default styles;

