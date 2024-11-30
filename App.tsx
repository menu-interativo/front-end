import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import "./src/utils/i18n";
import { LanguageProvider } from "./src/contexts/LanguageContext"; // Certifique-se de que o caminho está correto

import TelaClienteInicial from "./src/screens/tablet/telaInicial.tablet";
import BemVindo from "./src/screens/tablet/bemVindo.tablet";
import TelaPrincipal from "./src/screens/tablet/telaPrincipal.tablet";
import TelaComanda from "./src/screens/tablet/TelaComanda.tablet";
import TelaPagamento from "./src/screens/tablet/TelaPagamento.tablet";
import TelaGarcomInicial from "./src/screens/celular/telaPrincipal.celular";
import TelaGarcom from "./src/screens/celular/telaGarcom.celular";
import TelaHistorico from "./src/screens/celular/telaHistorico.celular";
import TelaAtivasCozinha from "./src/screens/cozinha/telaAtivas.cozinha";
import TelaHistoricoCozinha from "./src/screens/cozinha/telaHistorico.cozinha";
import LoginScreen from "./src/screens/Login";

const Stack = createStackNavigator();

import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
	Home: undefined;
};

type HomeScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, "Home">;
};

function HomeScreen({ navigation }: HomeScreenProps) {

	return (
	<View style={styles.container}>
		<StatusBar hidden={true} />
		<StatusBar barStyle="light-content" backgroundColor="#141A31" />

		<Button
			title="Tela cliente Inicial "
			onPress={() => navigation.navigate("TelaClienteInicial")}
		/>
		<Button title="Login " onPress={() => navigation.navigate("LoginScreen")} />
		<Button
			title="Cozinha "
			onPress={() => navigation.navigate("TelaAtivasCozinha")}
		/>
		<Button
			title="Cozinha "
			onPress={() => navigation.navigate("TelaComanda")}
		/>
		<Button
			title="Cozinha "
			onPress={() => navigation.navigate("TelaPagamento")}
		/>
	</View>
);
}

export default function App() {
	return (
	<LanguageProvider>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="TelaClienteInicial"
					component={TelaClienteInicial}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="BemVindo"
					component={BemVindo}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="TelaPrincipal"
					component={TelaPrincipal}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="TelaComanda"
					component={TelaComanda}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="TelaGarcomInicial"
					component={TelaGarcomInicial}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="TelaGarcom"
					component={TelaGarcom}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="TelaHistorico"
					component={TelaHistorico}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="TelaAtivasCozinha"
					component={TelaAtivasCozinha}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="TelaHistoricoCozinha"
					component={TelaHistoricoCozinha}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
				<Stack.Screen
					name="TelaPagamento"
					component={TelaPagamento}
					options={{
						headerShown: false,
						...TransitionPresets.SlideFromRightIOS,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</LanguageProvider>
);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000000",
		justifyContent: "center",
		padding: 24,
	},
	languages: {
		flexDirection: "row",
		justifyContent: "center",
		position: "absolute",
		top: StatusBar.currentHeight ? StatusBar.currentHeight + 18 : 58,
	},
	langButton: {
		borderWidth: 1,
		padding: 4,
		borderRadius: 4,
		marginHorizontal: 4,
		borderColor: "#037CFC",
	},
	langText: {
		color: "#FFF",
	},
});
