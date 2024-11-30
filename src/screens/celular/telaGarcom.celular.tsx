import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import styles from "./telaGarcom.style";

const HeaderButton = ({ icon, onPress }) => (
	<TouchableOpacity
		style={styles.headerButton}
		onPress={onPress}
		accessible={true}
	>
		<Icon name={icon} size={32} color="#FFF" />
	</TouchableOpacity>
);

const TelaGarcom = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<View style={styles.visual}>
					<HeaderButton icon="arrow-back" onPress={() => navigation.goBack()} />
					<View style={styles.iconWrapper}>
						<Icon name="person" size={48} color="#FFF" />
					</View>
				</View>
				<View style={styles.headerTextSupport}>
					<Text style={styles.headerText}>Teste de um nome grande</Text>
				</View>
			</View>

			<View style={styles.bottomContainer}>
				<View style={styles.centralizaTexto}>
					<Text style={styles.textoMesas}>Mesas Associadas</Text>
				</View>
				<View style={styles.mesasAssociadas}>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
					<Text style={styles.textoTesto}>Mesa X</Text>
				</View>
			</View>
		</View>
	);
};

export default TelaGarcom;
