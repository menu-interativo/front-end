import React, { useState } from "react";
import {
	View,
	Image,
	Text,
	TextInput,
	FlatList,
	TouchableOpacity,
	Modal,
	ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import styles from "./TelaPagamento.styles"; // Import styles

const images = [
	require("../../assets/images/masterCard.png"),
	require("../../assets/images/Visa.png"),
	require("../../assets/images/AmericoExpless.png"),
	require("../../assets/images/ticket.png"),
	require("../../assets/images/sodexo.png"),
	require("../../assets/images/VR.png"),
	require("../../assets/images/Alelo-1.png"),
	require("../../assets/images/elo.png"),
	require("../../assets/images/Hiper.png"),
];

const TelaPagamento = () => {
	const navigation = useNavigation<any>();

	{
		/*modal pagar*/
	}
	const [isModalVisible, setModalVisible] = useState(false);
	const [isConfirmationModalVisible, setConfirmationModalVisible] =
		useState(false);
	const handleChooseButtonPress = () => {
		setConfirmationModalVisible(true);
	};

	const handleConfirm = () => {
		setConfirmationModalVisible(false);
		setModalVisible(true);
	};

	const handleCancel = () => {
		setConfirmationModalVisible(false);
	};

	{
		/*Bandeiras */
	}
	const renderItem = ({ item }: { item: any }) => (
		<Image source={item} style={styles.bandeiras} />
	);

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.title}>Formas de Pagamento</Text>
				<View style={styles.icones}>
					<View style={styles.iconBox}>
						<Text style={styles.iconLabel}>Voltar</Text>
						<TouchableOpacity>
							<View style={styles.iconCardapio}>
								<Icon name="arrow-back" size={35} color="#751617" />
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.iconBox}>
						<Text style={styles.iconLabel}>Comanda</Text>
						<TouchableOpacity onPress={() => navigation.navigate("TelaComanda")}>
							<View style={styles.iconCardapio}>
								<Icon name="document-text-outline" size={35} color="black" />
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			{/* Container de Opções */}
			<View style={styles.paymentContainer}>
				<View style={styles.paymentMethods}>
					{/* PIX */}
					<View style={styles.paymentMethod}>
						<View style={styles.row}>
							<Text style={styles.pixText}>PIX</Text>
							<Image
								source={require("../../assets/images/imgPix.png")}
								style={styles.paymentImage}
							/>
						</View>
						<View style={styles.line} />
						<Text style={styles.qrCodeText}>• QR CODE</Text>
						<View style={styles.line} />
						<View style={styles.centered}>
							<TouchableOpacity style={styles.chooseButton} onPress={handleChooseButtonPress}>
								<Text style={styles.chooseButtonText}>ESCOLHER</Text>
							</TouchableOpacity>

							<Modal
								transparent={true}
								animationType="slide"
								visible={isModalVisible}
								onRequestClose={() => setModalVisible(false)}
							>
								<View style={styles.modalContainer}>
									<View style={styles.modalContent}>
										<Text style={styles.modalText}>O garçon está a caminho</Text>
										<ActivityIndicator size="large" color="#0000ff" />
									</View>
								</View>
							</Modal>

							<Modal
								transparent={true}
								animationType="slide"
								visible={isConfirmationModalVisible}
								onRequestClose={() => setConfirmationModalVisible(false)}
							>
								<View style={styles.modalContainer}>
									<View style={styles.modalContent}>
										<Text style={styles.modalText}>Tem certeza que gostaria de finalizar?</Text>
										<View style={styles.modalButtonContainer}>
											<TouchableOpacity style={styles.modalButton} onPress={handleCancel}>
												<Text style={styles.modalButtonText}>Não</Text>
											</TouchableOpacity>
											<TouchableOpacity style={styles.modalButton} onPress={handleConfirm}>
												<Text style={styles.modalButtonText}>Sim</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</Modal>
						</View>
					</View>
					{/* Cartão */}
					<View style={styles.paymentMethod}>
						<View style={styles.row}>
							<Text style={styles.pixText}>Cartão</Text>
							<Image
								source={require("../../assets/images/imgCartao.png")}
								style={styles.paymentImage1}
							/>
						</View>
						<View style={styles.line} />
						<View>
							<FlatList
								data={images}
								renderItem={renderItem}
								keyExtractor={(item, index) => index.toString()}
								numColumns={3}
							/>
						</View>
						<View style={styles.line} />
						<View style={styles.centered}>
							<TouchableOpacity style={styles.chooseButton} onPress={handleChooseButtonPress}>
								<Text style={styles.chooseButtonText}>ESCOLHER</Text>
							</TouchableOpacity>
						</View>
					</View>
					{/* Dinheiro */}
					<View style={styles.paymentMethod}>
						<View style={styles.row}>
							<Text style={styles.pixText}>Dinheiro</Text>
							<Image
								source={require("../../assets/images/imgDinheiro.png")}
								style={styles.paymentImage}
							/>
						</View>
						<View style={styles.line} />
						<View style={styles.centeredContainer}>
							<Text style={styles.trocoText}>Troco para?</Text>
							<TextInput style={styles.input} placeholder="Digite um Valor" />
						</View>
						<View style={styles.line} />
						<View style={styles.centered}>
							<TouchableOpacity style={styles.chooseButton} onPress={handleChooseButtonPress}>
								<Text style={styles.chooseButtonText}>ESCOLHER</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.totalContainer}>
					<View style={styles.totalRow}>
						<Text style={styles.totalText}>TOTAL DO ATENDIMENTO</Text>
						<View style={styles.verticalLine} />
						<View style={styles.tipContainer}>
							<Text style={styles.tipText}>Gorjeta</Text>
							<Text style={styles.amountText}>R$ 11,38</Text>
						</View>
						<View style={styles.verticalLine} />
						<View style={styles.totalAmountContainer}>
							<Text style={styles.totalFinalText}>TOTAL</Text>
							<Text style={styles.amountText}>R$ 113,60</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default TelaPagamento;
