import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./TelaComanda.styles";
import { formatToBRL } from "../../utils/formatToBRL";
import * as FileSystem from 'expo-file-system'; // Importe a biblioteca


type ComandaItemProps = {
	index: number;
	title: string;
	description: string;
	quantity: number;
	price: string;
	total: string;
	status: string;
	image: any;
};

const ComandaItem: React.FC<ComandaItemProps> = ({
	index,
	title,
	description,
	quantity,
	price,
	total,
	status,
	image,
}) => (
	<View style={styles.itemContainer}>
		<View style={styles.itemsDetails}>
			<Text style={styles.priceText}>PRATO     </Text>
			<Text style={styles.priceText1}>QTD</Text>
			<Text style={styles.priceText2}>PREÇO</Text>
			<Text style={styles.priceText3}>TOTAL</Text>
			<Text style={styles.priceText4}>STATUS</Text>
		</View>
		<View style={styles.itemDados}>
			<Text style={styles.itemIndex}>{index}</Text>
			<View style={styles.itemDetails}>
				<View style={styles.itemContent}>
					<Image style={styles.image} source={image} />
					<View style={styles.textContainer}>
						<Text style={styles.itemTitle}>{title}</Text>
						<Text style={styles.itemDescription}>{description}</Text>
					</View>
				</View>
			</View>
			<View style={styles.itemQuantity}>
				<View style={styles.circle}>
					<Text style={styles.quantityText}>{quantity}</Text>
				</View>
			</View>
			<View style={styles.itemPrice}>
				<Text style={styles.totalText}>{price}</Text>
			</View>
			<View style={styles.itemPrice}>
				<Text style={styles.totalText}>{total}</Text>
			</View>
			<View style={styles.itemStatus}>
				<Text
					style={[
						styles.statusText,
						{ color: status === "ENTREGUE" ? "#10C525" : "#EF600F" },
					]}
				>
					{status}
				</Text>
			</View>
		</View>
	</View>
);

const TelaComanda: React.FC = () => {
	const [bgColor, setBgColor] = useState("white");
	const [orders, setOrders] = useState([]); // Estado para armazenar os pedidos
	const [totalAmount, setTotalAmount] = useState(0); // Estado para armazenar a soma dos valores total
	const navigation = useNavigation();

	useEffect(() => {
	const loadOrders = async () => {
		const path = FileSystem.documentDirectory + "orders.json";
		try {
			const ordersJson = await FileSystem.readAsStringAsync(path, {
				encoding: FileSystem.EncodingType.UTF8,
			});
			let ordersData = JSON.parse(ordersJson);

			// Ordene os pedidos em ordem decrescente
			ordersData = ordersData.sort((a, b) => b.total - a.total);

			setOrders(ordersData);

			// Calcule a soma dos valores total
			const total = ordersData.reduce((acc, order) => acc + order.total, 0);
			setTotalAmount(total);
		} catch (error) {
			console.error("Erro ao ler o arquivo JSON:", error);
		}
	};

	loadOrders();
}, []);

	return (
		<View style={styles.container}>
			{/* Título à esquerda e ícones à direita */}
			<View style={styles.header}>
				<Text style={styles.title}>Comanda</Text>
				<View style={styles.icones}>
					<View style={styles.iconBox}>
						<Text style={styles.iconLabel}>Garçom</Text>
						<TouchableOpacity
							onPress={() => setBgColor(bgColor === "#EF600F" ? "white" : "#EF600F")}
						>
							<View style={[styles.iconCircle, { backgroundColor: bgColor }]}>
								<Icon name="notifications-outline" size={35} color="black" />
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.iconBox}>
						<Text style={styles.iconLabel}>Cardápio</Text>
						<TouchableOpacity onPress={() => navigation.navigate("TelaPrincipal" as never)}>
							<View style={styles.iconCardapio}>
								<Icon name="document-text-outline" size={35} color="black" />
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			{/* Container da Comanda */}
			<View style={styles.containerComanda}>
				<ScrollView style={styles.innerContainer}>
					{orders.map((order, index) => (
						<ComandaItem
							key={index}
							index={index + 1}
							title={order.name}
							description={order.description}
							quantity={order.quantity}
							price={formatToBRL(order.price)} // Formate o preço
							total={formatToBRL(order.total)} // Formate o total
							status="EM PREPARO"
							image={
								order.imageUrl
									? { uri: order.imageUrl }
									: require("../../assets/images/prato1.png")
							}
						/>
					))}
				</ScrollView>
			</View>

			{/* Total da comanda */}
			<View style={styles.totalContainer}>
				<Text style={styles.totalText}>TOTAL</Text>
				<Text style={styles.totalAmount}>{formatToBRL(totalAmount)}</Text>
			</View>
		</View>
	);
};

export default TelaComanda;
