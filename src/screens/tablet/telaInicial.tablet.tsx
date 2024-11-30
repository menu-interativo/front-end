// telainicial.tablet.tsx
import React, { useContext } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import CustomSwitch from "../../components/switchCustomizado";
import styles from "./telaInicial.styles";
import { RootStackParamList } from "../../navigations/RootStackParamList";
import { LanguageContext } from "../../contexts/LanguageContext"; // Usando o LanguageContext

const TelaClienteInicial = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const { t } = useTranslation();

	// Obtendo o contexto de linguagem
	const languageContext = useContext(LanguageContext);

	// Verifica se o contexto está disponível
	if (!languageContext) {
		return <Text>Error: Language context is undefined</Text>;
	}

	const { isEnabled, toggleLanguage } = languageContext;

	return (
		<TouchableOpacity
			style={styles.background}
			onPress={() => navigation.navigate("BemVindo")}
		>
			<Image source={require("../../assets/images/logo.png")} />
			<Text style={styles.clique}>{t("pressionar")}</Text>
			{/* Usando o switch do contexto para alternar idiomas */}
			<CustomSwitch value={isEnabled} onValueChange={toggleLanguage} />
		</TouchableOpacity>
	);
};

export default TelaClienteInicial;
