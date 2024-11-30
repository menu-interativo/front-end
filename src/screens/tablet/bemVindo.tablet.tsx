import React, { useEffect, useContext } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
} from "react-native";
import { useTranslation } from "react-i18next";
import CustomSwitch from "../../components/switchCustomizado";
import { LanguageContext } from "../../contexts/LanguageContext"; // Certifique-se de que está no caminho correto
import { useFonts, Inder_400Regular } from "@expo-google-fonts/inder";
import * as SplashScreen from "expo-splash-screen";
import styles from "./bemVindo.styles";
import { useNavigation } from '@react-navigation/native';

const BemVindo = () => {
    const { t } = useTranslation();
    const languageContext = useContext(LanguageContext);
    const navigation = useNavigation();

    // Prevenir o splash screen de desaparecer antes do carregamento das fontes
    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    // Carregar a fonte customizada
    const [fontsLoaded] = useFonts({
        Inder_400Regular,
    });

    // Função para esconder a splash screen após o carregamento das fontes
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // Verifica se o contexto está disponível
    if (!languageContext) {
        return <Text>Error: Language context is undefined</Text>;
    }

    const { isEnabled, toggleLanguage } = languageContext;

    // Verificar se as fontes ainda estão carregando
    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#000" />;
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.leftContainer}>
                <Image
                    source={require("../../assets/images/bemVindo.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.switchContainer}>
                    <CustomSwitch value={isEnabled} onValueChange={toggleLanguage} />
                </View>
                <Text style={styles.title}>{t("boasVindas")}</Text>
                <Text style={styles.text}>{t("textoBoasVindas")}</Text>
                <Text style={styles.text}>{t("textoBoasVindas2")}</Text>
                <Text style={styles.text}>{t("textoBoasVindas3")}</Text>
                <Text style={styles.smallText}>{t("agradecimentoBoasVindas")}</Text>

                {/* Botão */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('TelaPrincipal')}
                    accessible={true}
                    accessibilityLabel={t("botaoBoasVindas")}
                >
                    <Text style={styles.buttonText}>{t("botaoBoasVindas")}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BemVindo;