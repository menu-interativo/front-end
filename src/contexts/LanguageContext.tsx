import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "../utils/i18n"; // Certifique-se de que está no caminho correto

// Define a interface para o contexto
interface LanguageContextProps {
	isEnabled: boolean;
	toggleLanguage: () => void;
}

// Cria o contexto
export const LanguageContext = createContext<LanguageContextProps | undefined>(
	undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [isEnabled, setIsEnabled] = useState(false);

	useEffect(() => {
		const loadLanguage = async () => {
			try {
				const savedLanguage = await AsyncStorage.getItem("language");
				if (savedLanguage) {
					const isEnglish = savedLanguage === "en";
					setIsEnabled(isEnglish);
					i18n.changeLanguage(savedLanguage);
				}
			} catch (error) {
				console.log("Erro ao carregar a linguagem", error);
			}
		};

		loadLanguage();
	}, []);

	const toggleLanguage = async () => {
		const newState = !isEnabled;
		const language = newState ? "en" : "pt";
		setIsEnabled(newState);
		i18n.changeLanguage(language);

		try {
			await AsyncStorage.setItem("language", language);
		} catch (error) {
			console.log("Erro ao salvar a linguagem", error);
		}
	};

	return (
		<LanguageContext.Provider value={{ isEnabled, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
