import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import styles from "./telaHistorico.style";

const HeaderButton = ({
	icon,
	onPress,
}: {
	icon: string;
	onPress: () => void;
}) => (
	<TouchableOpacity
		style={styles.headerButton}
		onPress={onPress}
		accessible={true}
	>
		<Icon name={icon} size={32} color="#FFF" />
	</TouchableOpacity>
);

const TelaHistorico = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<View style={styles.visual}>
					<HeaderButton icon="arrow-back" onPress={() => navigation.goBack()} />
					<View style={styles.iconWrapper}>
						<Icon name="folder" size={48} color="#FFF" />
					</View>
				</View>
				<View style={styles.headerTextSupport}>
					<Text style={styles.headerText}>Histórico</Text>
				</View>
			</View>

			<View style={styles.topContainer}>
				<View style={styles.centralizaTextoSalao}>
					<Text style={styles.textoSalao}>Salão</Text>
				</View>
				<View style={styles.horizontalLineTop} />
			</View>

			<View style={styles.bottomContainer}>
				<View style={styles.centralizaTexto}>
					<Text style={styles.textoCozinha}>Cozinha</Text>
				</View>
				<View style={styles.horizontalLine} />
				<ScrollView style={styles.scrollContainer}>
					<View style={styles.cozinhaContainer}>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa X</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XX</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XX</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XX</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XX</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XX</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XX</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XX</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XX</Text>
						<Text style={styles.textoCozinhaDentro}>Mesa XXX</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default TelaHistorico;
