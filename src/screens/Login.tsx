import React, { useState } from "react";
import { View, Text, Image, Alert, Dimensions } from "react-native";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import { styles } from "./Login.styles"; // Importe o estilo
import { useNavigation } from "@react-navigation/native"; // Import navigation

const LoginScreen = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation(); // Initialize navigation

	const { width } = Dimensions.get("window"); // Obtenha a largura da tela
	const isTablet = width >= 768; // Defina uma largura mínima para considerar um tablet

	const handleLogin = () => {
	if (!username || !password) {
		Alert.alert("Erro", "Por favor, preencha todos os campos.");
		return;
	}

	setLoading(true);

	setTimeout(() => {
		setLoading(false);
		console.log("Usuário:", username);
		console.log("Senha:", password);

		// Verifique o tipo de dispositivo e navegue para a tela correta
		if (isTablet) {
			navigation.navigate("TelaClienteInicial");
		} else {
			navigation.navigate("TelaGarcomInicial");
		}
	}, 2000);
};

	return (
	<View style={styles.container}>
		{isTablet && (
			<View style={styles.leftContainer}>
				<Image source={require("../assets/images/logo.png")} style={styles.logo} />
			</View>
		)}

		<View style={styles.rightContainer}>
			<View style={styles.capsula}>
				{!isTablet && (
					<Image
						source={require("../assets/images/logo.png")}
						style={styles.logoMobile}
					/>
				)}
				<Text style={styles.loginText}>Login</Text>
				<View style={styles.formContainer}>
					<TextInput
						label="Usuário"
						mode="flat"
						value={username}
						onChangeText={setUsername}
						style={styles.input}
						textColor="#FFF"
						theme={{
							colors: { placeholder: "#fff", primary: "#FFF" },
						}}
						underlineColor="#FFF"
					/>
					<TextInput
						label="Senha"
						mode="flat"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
						style={styles.input}
						textColor="#FFF"
						theme={{
							colors: { text: "#FFF", placeholder: "#999", primary: "#FFF" },
						}}
						underlineColor="#FFF"
					/>
					{loading ? (
						<ActivityIndicator animating={true} size="large" color="#fff" />
					) : (
						<Button mode="contained" onPress={handleLogin} style={styles.button}>
							<Text style={styles.buttonText}>Entrar</Text>
						</Button>
					)}
				</View>
			</View>
		</View>
	</View>
);
};

export default LoginScreen;
