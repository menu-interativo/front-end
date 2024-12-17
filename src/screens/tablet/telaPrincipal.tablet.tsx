import React, { useContext, useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";
import {
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";
import { Text, Badge, Modal } from "react-native-paper";
import CustomSwitch from "../../components/switchCustomizado";
import { RootStackParamList } from "../../navigations/RootStackParamList";
import { LanguageContext } from "../../contexts/LanguageContext";
import styles from "./telaPrincipal.styles";
import CardPedido from "../../components/cardPedidos";
import SideBarMenu from "../../components/sidebarMenu";
import { Dish, useDishesByCategory } from "../../hooks/useDishesByCategory";
import DishDetails from "../../components/DishDetails";


const TelaPrincipal = () => {
	const [dish, setDish] = useState<Dish | null>(null);
	const [showModal, setShowModal] = useState(false);

	const [iconWrapperColor, setIconWrapperColor] = useState("#FFFFFF");
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const { t } = useTranslation();

	// Obtendo o contexto de linguagem
	const languageContext = useContext(LanguageContext);

	// Verifica se o contexto está disponível
	if (!languageContext) {
		return <Text>Error: Language context is undefined</Text>;
	}
	const { isEnabled, toggleLanguage } = languageContext;
	const { selectedCategory, setSelectedCategory, dishes, loading } = useDishesByCategory();

	const handlePressGarcom = () => {
		setIconWrapperColor("#EF600F");
	};

	const handlePressComanda = () => {
	navigation.navigate("TelaComanda");
};


	const handlePressDish = (dish: Dish) => {
		setDish(dish);
		setShowModal(true);
	}

	const handleCloseModal = () => {
		setShowModal(false);
	}

	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />

			{/* Container que organiza o layout em duas colunas */}
			<View style={styles.mainContainer}>
				{/* Sidebar à esquerda */}
				<View style={styles.sidebarContainer}>
					<SideBarMenu selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
				</View>

				{/* Conteúdo à direita */}
				<View style={styles.contentContainer}>
					{/* Header */}
					<View style={styles.headerContainer}>
						<Text style={styles.title}>{t(selectedCategory)}</Text>
						<View style={styles.iconContainer}>
							<CustomSwitch value={isEnabled} onValueChange={toggleLanguage} />
							<TouchableOpacity style={styles.iconColumn} onPress={handlePressGarcom}>
								<View style={[styles.iconWrapper, { backgroundColor: iconWrapperColor }]}>
									<Image source={require("../../assets/images/garçom.png")} style={styles.icon} />
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={styles.iconColumn} onPress={handlePressComanda}>
								<View style={styles.iconWrapper}>
									<Image
										source={require("../../assets/images/comanda.png")}
										style={styles.icon}
									/>
									<Badge style={styles.comandaBadge}>2</Badge>
								</View>
							</TouchableOpacity>
						</View>
					</View>

					{/* Cards */}
					<View style={styles.cardContainer}>
						{loading ? (<Text>carregando...</Text>) : (
							<ScrollView contentContainerStyle={styles.scrollView}>

								{dishes.map((dish, index) => (
									<TouchableOpacity key={index} onPress={() => handlePressDish(dish)}>
										<CardPedido
											key={dish.id}
											titulo={dish.name}
											subtitulo={dish.description ?? ''}
											preco={dish.price}
											imagem={dish.imageUrl}
											badge={10}
										/>
									</TouchableOpacity>
								))}

							</ScrollView>
						)}
					</View>
				</View>
			</View>

			<Modal
				visible={showModal}
				style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
				children={<DishDetails dish={dish} onClose={handleCloseModal} />}
			/>

			<StatusBar style="auto" />
		</View>
	);
};

export default TelaPrincipal;