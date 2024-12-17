import React, { useMemo, useState } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Card, Text, IconButton, Icon } from "react-native-paper";
import type { Dish } from "../hooks/useDishesByCategory";
import { formatToBRL } from "../utils/formatToBRL";
import * as FileSystem from 'expo-file-system'; // Importe a biblioteca

interface DishDetailsProps {
	dish: Dish | null;
	onClose: VoidFunction;
}

const DishDetailsModal: React.FC<DishDetailsProps> = ({ dish, onClose }) => {
	const [quantity, setQuantity] = useState(1);
	const [order, setOrder] = useState(null);
	const [expanded, setExpanded] = useState(false);
	const [items, setItems] = useState([
		{ name: "item1", price: 10, selected: false },
		{ name: "item2", price: 20, selected: false },
		{ name: "item3", price: 5, selected: false },
		{ name: "item4", price: 35, selected: false },
		{ name: "item5", price: 15, selected: false },
		{ name: "item6", price: 25, selected: false },
		{ name: "item7", price: 30, selected: false },
		{ name: "item8", price: 40, selected: false },
	]);

	if (!dish) {
		onClose();
		return null;
	}

	const total = useMemo(() => {
		const selectedItems = items.filter((item) => item.selected);
		const totalItems = selectedItems.reduce((acc, item) => acc + item.price, 0);
		return (totalItems + dish.price) * quantity;
	}, [dish, quantity, items]);

	const incrementQuantity = () => {
		if (quantity < dish.stock) setQuantity(quantity + 1);
	};

	const decrementQuantity = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	const handleSelectItem = (index: number) => {
		const newItems = [...items];
		newItems[index].selected = !newItems[index].selected;
		setItems(newItems);
	};

  const handleAddOrder = async () => {
    const newOrder = {
      name: dish.name,
      description: dish.description,
      imageUrl: dish.imageUrl,
      quantity: quantity,
      category: dish.category,
      price: dish.price,
      total: total,
			
    };

    const path = FileSystem.documentDirectory + "orders.json";

    try {
      // Leia o arquivo JSON existente
      let orders = [];
      const fileExists = await FileSystem.getInfoAsync(path);
      if (fileExists.exists) {
        const ordersJson = await FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
        orders = JSON.parse(ordersJson);
      }

      // Adicione o novo pedido à lista de pedidos
      orders.push(newOrder);

      // Salve a lista atualizada de pedidos de volta no arquivo JSON
      const updatedOrdersJson = JSON.stringify(orders);
      await FileSystem.writeAsStringAsync(path, updatedOrdersJson, { encoding: FileSystem.EncodingType.UTF8 });
      console.log("Arquivo JSON salvo em:", path);
    } catch (error) {
      console.error("Erro ao salvar o arquivo JSON:", error);
    }

    setOrder(newOrder);
  };

	return (
	<Card
		style={{
			minWidth: "80%",
			maxWidth: "80%",
			backgroundColor: "#F3F3F3",
			height: "90%",
			position: "relative",
		}}
	>
		<TouchableOpacity
			onPress={onClose}
			style={{
				backgroundColor: "#990E0E",
				borderRadius: 32,
				height: 72,
				width: 72,
				justifyContent: "center",
				alignItems: "center",
				position: "absolute",
				right: -32,
				top: -32,
				zIndex: 1, // Adicionado para garantir que o botão fique em cima de tudo
			}}
		>
			<Image
				source={require("../assets/images/btn_close.png")}
				style={{ width: 72, height: 72 }}
			/>
		</TouchableOpacity>
		<View style={{ padding: 16, height: "100%" }}>
			<View style={{ flexDirection: "row", height: "45%", gap: 16 }}>
				<Image
					source={
						dish.imageUrl
							? { uri: dish.imageUrl }
							: require("../assets/images/dish-without-image.png")
					}
					style={{ flex: 1, height: "100%" }}
					resizeMode="stretch"
				/>
				<View style={{ flex: 2, justifyContent: "space-between" }}>
					<View
						style={{
							backgroundColor: "#D7D0BC",
							padding: 24,
							borderRadius: 10,
							height: "70%",
						}}
					>
						<Text style={{ fontSize: 36, fontWeight: "bold" }}>{dish.name}</Text>
						<Text style={{ fontSize: 18 }}>{dish.description}</Text>
					</View>
					<View
						style={{
							backgroundColor: "#D7D0BC",
							height: "22%",
							borderRadius: 10,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingHorizontal: 24,
						}}
					>
						<Text style={{ fontSize: 34, fontWeight: "600" }}>
							{formatToBRL(dish.price)}
						</Text>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<IconButton
								size={48}
								icon="minus-thick"
								containerColor="black"
								iconColor="#FFCC00"
								onPress={decrementQuantity}
							/>
							<Text
								style={{
									fontSize: 64,
									lineHeight: 69.5,
									color: "#FFF",
									backgroundColor: "#B3261E",
									width: 100,
									height: 100,
									borderRadius: 61,
									textAlign: "center",
									textAlignVertical: "center",
									marginHorizontal: 8,
								}}
							>
								{quantity}
							</Text>
							<IconButton
								size={48}
								icon="plus-thick"
								containerColor="black"
								iconColor="#34C759"
								onPress={incrementQuantity}
							/>
						</View>
					</View>
				</View>
			</View>
			<View style={{ flexDirection: "row", flex: 1, marginTop: 32, gap: 16 }}>
				<View style={{ flex: 1, gap: 8 }}>
					<View
						style={{
							backgroundColor: "#B3261E",
							flex: 1,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							alignItems: "center",
							padding: 16,
						}}
					>
						<Text
							style={{
								color: "#FFFFFF",
								fontSize: 18,
								fontWeight: "600",
							}}
						>
							Ingredientes
						</Text>
						<View
							style={{
								flex: +expanded,
								marginTop: 8,
								backgroundColor: "#D9D9D9",
								paddingHorizontal: 16,
								paddingVertical: 12,
								borderRadius: 12,
								overflow: "hidden",
							}}
						>
							<TouchableOpacity
								onPress={() => setExpanded(!expanded)}
								style={{
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									gap: 16,
									width: "100%",
								}}
							>
								<Icon source="plus" color="#000" size={24} />
								<Text
									style={{
										color: "#000",
										fontSize: 20,
										flex: 1,
									}}
								>
									Adicionar
								</Text>
								<Icon source={expanded ? "menu-up" : "menu-down"} color="#000" size={24} />
							</TouchableOpacity>
							{expanded && (
								<ScrollView>
									{items.map((item, index) => (
										<TouchableOpacity
											onPress={() => handleSelectItem(index)}
											key={index}
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
												paddingVertical: 8,
											}}
										>
											<Icon
												source={item.selected ? "checkbox-marked" : "checkbox-blank-outline"}
												color="#000"
												size={24}
											/>
											<Text style={{ color: "#000", fontSize: 18 }}>{item.name}</Text>
											<Text
												style={{
													color: "#000",
													fontSize: 18,
													textAlign: "right",
												}}
											>
												{formatToBRL(item.price)}
											</Text>
										</TouchableOpacity>
									))}
								</ScrollView>
							)}
						</View>
					</View>
					<View
						style={{
							height: 56,
							backgroundColor: "#000",
							borderBottomLeftRadius: 10,
							borderBottomRightRadius: 10,
						}}
					>
						<Text
							style={{
								color: "#FFF",
								fontSize: 24,
								fontWeight: "bold",
								textAlign: "justify",
								lineHeight: 56,
								paddingHorizontal: 16,
							}}
						>
							Total: {formatToBRL(total)}
						</Text>
					</View>
				</View>
				<View
					style={{
						width: "45%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							gap: 16,
							backgroundColor: "#000",
							width: "100%",
							padding: 8,
							borderRadius: 64,
							justifyContent: "center",
							alignItems: "center",
							marginTop: 228,
						}}
						onPress={handleAddOrder}
					>
						<Text
							style={{
								color: "#FFF",
								flex: 1,
								textAlign: "center",
								fontSize: 32,
								fontWeight: "bold",
							}}
						>
							Adicionar ao pedido
						</Text>
						<View
							style={{
								backgroundColor: "#34C759",
								padding: 8,
								borderRadius: 50,
							}}
						>
							<Icon source="plus-thick" color="#FFF" size={40} />
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	</Card>
);
};

export default DishDetailsModal;
