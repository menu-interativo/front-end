import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const CustomSwitch = ({ value, onValueChange }: { value: boolean, onValueChange: () => void }) => {
	return (
		<TouchableOpacity
			style={[styles.switchContainer, value ? styles.switchOn : styles.switchOff]}
			onPress={onValueChange}
		>
			<View style={[styles.switchThumb, value ? styles.thumbOn : styles.thumbOff]}>
				<Image
					source={
						value
							? require("../assets/images/bandeiraEUA.png")
							: require("../assets/images/bandeiraBrasil.png")
					}
					style={styles.flag}
				/>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	switchContainer: {
		width: 100,
		height: 60,
		borderRadius: 30,
		padding: 14,
		justifyContent: "center",
	},
	switchOn: {
		backgroundColor: "#D9D9D9",
	},
	switchOff: {
		backgroundColor: "#D9D9D9",
	},
	switchThumb: {
		width: 26,
		height: 26,
		borderRadius: 14,
		justifyContent: "center",
		alignItems: "center",
	},
	thumbOn: {
		alignSelf: "flex-end",
	},
	thumbOff: {
		alignSelf: "flex-start",
	},
	flag: {
		width: 45,
		height: 45,
	},
});

export default CustomSwitch;
