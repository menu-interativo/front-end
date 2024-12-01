import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Category } from "../hooks/useDishesByCategory";
import { t } from "i18next";

interface SideBarMenuProps {
	selectedCategory: Category,
	onSelectCategory: (category: Category) => void
}

const SideBarMenu = ({ selectedCategory, onSelectCategory }: SideBarMenuProps) => {
	const categories = Object.values(Category);

	return (
		<View style={styles.sidebarContainer}>
			{categories.map((category, index) => (
				index < categories.length - 1 && ( // Ignora o último item
					<TouchableOpacity
						key={index}
						style={selectedCategory === category ? styles.menuItemDark : styles.menuItemLight}
						onPress={() => onSelectCategory(category)}
					>
						<Text style={styles.menuText}>{t(category.valueOf())}</Text>
					</TouchableOpacity>
				)
			))}
			<TouchableOpacity style={styles.finalizeButton}>
				<Text style={styles.finalizeText}>FINALIZAR ATENDIMENTO</Text>
			</TouchableOpacity>
		</View>
	);
};


const styles = StyleSheet.create({
	sidebarContainer: {
		width: 170,
		backgroundColor: "#fff",
		paddingVertical: 30,
		paddingHorizontal: 16,
		justifyContent: "space-between",
		borderRadius: 8,
	},
	menuItemDark: {
		width: 130,
		height: 85,
		backgroundColor: "#1E1E1E",
		marginBottom: 35,
		padding: 25,
		borderRadius: 8,
		left: 4,
	},
	menuItemLight: {
		width: 130,
		height: 85,
		backgroundColor: "#e0d5b9",
		marginBottom: 35,
		padding: 25,
		borderRadius: 8,
		left: 4,
	},
	menuText: {
		color: "white",
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "center",
		top: 8,
	},
	finalizeButton: {
		width: 130,
		backgroundColor: "#000000",
		padding: 12,
		borderRadius: 8,
		marginTop: "auto",
		left: 4,
	},
	finalizeText: {
		color: "#fff",
		textAlign: "center",
		fontSize: 14,
		fontWeight: "bold",
	},
});

export default SideBarMenu;