import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Text, Button, Badge } from "react-native-paper";
import { formatToBRL } from "../utils/formatToBRL";

interface CardPedidoProps {
	titulo: string;
	subtitulo: string;
	preco: number;
	imagem: string | null;
	badge?: number; // Torne o badge opcional
}

const CardPedido: React.FC<CardPedidoProps> = ({
	titulo,
	subtitulo,
	preco,
	imagem,
	badge,
}) => {
	return (
		<View style={styles.container}>
			<Card style={styles.card}>
				<View style={styles.row}>
					<View style={styles.imageContainer}>
						<Image
							source={ imagem ? { uri: imagem } : require("../assets/images/dish-without-image.png")}
							style={styles.image}
						/>
					</View>
					<View style={styles.textContainer}>
						<Text numberOfLines={2} style={styles.title}>{titulo}</Text>
						<Text numberOfLines={4} style={styles.subtitle}>{subtitulo}</Text>
						<View style={styles.footer}>
							<Button mode="contained" style={styles.priceButton}>
								<Text style={styles.priceText}>{formatToBRL(preco)}</Text>
							</Button>
						</View>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		alignItems: "center",
	},
	card: {
		width: 400,
		height: 180,
		borderRadius: 10,
		backgroundColor: "#D7D0BC",
		padding: 8,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	imageContainer: {
		flex: 3,
	},
	image: {
		height: '100%',
		width: '100%',
		borderBottomRightRadius: 50,
		borderRadius: 10,
		objectFit: "fill",
	},
	textContainer: {
		flex: 5,
		height: "100%",
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
	},
	subtitle: {
		color: "gray",
		marginTop: 4,
		fontSize: 14,
		flex: 1,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: 8,
	},
	priceButton: {
		width: '60%',
		backgroundColor: "#1E1E1E",
		borderRadius: 10,
		borderTopLeftRadius: 50,
	},
	priceText: {
		color: "white",
		width: "100%",
		textAlign: "left",
		fontSize: 18,
		paddingLeft: 16
	},
});

export default CardPedido;
