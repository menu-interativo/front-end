import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./telaPrincipal.style";

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
		<Icon name={icon} size={24} color="#000" />
	</TouchableOpacity>
);

const TelaGarcomInicial = () => {
	const navigation = useNavigation();
	const [showNotification, setShowNotification] = useState(true);
	const [counter, setCounter] = useState(30);

	useEffect(() => {
		if (showNotification) {
			const timer = setInterval(() => {
				setCounter((prevCounter) => prevCounter - 1);
			}, 1000);

			const timeout = setTimeout(() => {
				setShowNotification(false);
			}, 30000);

			return () => {
				clearInterval(timer);
				clearTimeout(timeout);
			};
		}
	}, [showNotification]);

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<HeaderButton
					icon="person"
					onPress={() => navigation.navigate("TelaGarcom")}
				/>
				<Image
					source={require("../../assets/images/logo.png")}
					style={styles.logo}
				/>
				<HeaderButton
					icon="folder"
					onPress={() => navigation.navigate("TelaHistorico")}
				/>
			</View>

			{/* Salão */}
			<View style={styles.salaoWrapper}>
				<Text style={styles.salaoTitle}>Salão</Text>
				<View style={styles.salaoContainer}>
					<View style={styles.salaoContent}>
						<Text style={styles.salaoText}>Teste</Text>
						<View style={styles.sinoContainer}>
							<Icon name="notifications" size={30} color="#000" />
						</View>
					</View>
				</View>
			</View>

			{/* Novo container */}
			<Text style={styles.chamadasTitle}>Salão</Text>
			<View style={styles.bottomContainer}>
				<View style={styles.chamadasWrapper}>
					<View style={styles.chamadasContainer}>
						<View style={styles.salaoContent}>
							<Text style={styles.chamadasText}>teste</Text>
							<View style={styles.sinoContainer}>
								<Icon name="notifications" size={30} color="#000" />
							</View>
						</View>
					</View>
				</View>
			</View>
			{/* Notificação */}
			{showNotification && (
				<View style={styles.notificationOverlay}>
					<Text style={styles.notificationNumber}>{counter}</Text>
					<Icon name="notifications" size={50} color="#EF600F" />
					<Text style={styles.notificationText}>Novo Atendimento</Text>
					<View style={styles.notificationBottom}>
						<TouchableOpacity
							style={styles.notificationButtonRed}
							onPress={() => setShowNotification(false)}
						>
							<Text style={styles.notificationButtonText}>Recusar</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.notificationButtonGreen}
							onPress={() => setShowNotification(false)}
						>
							<Text style={styles.notificationButtonText}>Aceitar</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
};

export default TelaGarcomInicial;
