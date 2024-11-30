import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./telaAtivas.style";

const TelaAtivasCozinha = () => {
    const navigation = useNavigation<any>();
    const route = useRoute();

    const isCurrentScreen = route.name === "TelaAtivasCozinha";

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
            </View>

            <ScrollView
                horizontal
                style={styles.scrollContainer}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.superContainer}>
                    {Array.from({ length: 1 }).map((_, index) => (
                        <View key={index} style={styles.square}>
                            <View style={styles.squareHeader}>
                                <Text style={styles.tempoEstimado}>Tempo estimado</Text>
                                <View style={styles.row}>
                                    <Text style={[styles.horaEstimada, styles.leftAlign]}>12:30</Text>
                                    <Icon
                                        name="notifications-outline"
                                        size={24}
                                        color="#000"
                                        style={styles.iconCenter}
                                    />
                                    <Text style={[styles.cronometro, styles.rightAlign]}>30:00</Text>
                                </View>
                                <Text style={styles.mesa}>Mesa 11</Text>
                            </View>
                            <View style={styles.comandaPedidos}>
                                <Text style={styles.comandaPedidosTexto}>Pedidos</Text>
                            </View>
                            <View style={styles.itemRow}>
                                <Text style={styles.itemNumber}>1</Text>
                                <Text style={styles.itemDescription}>Pão c/ Alho</Text>
                            </View>
                            <View style={styles.obs}>
                                <Text style={styles.obsText}>SEM OBS</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.prontoButton}>
                                    <Icon
                                        name="checkmark"
                                        size={32} // Aumente o tamanho para dar a impressão de negrito
                                        color="#D9D9D9"
                                        style={styles.prontoButtonIcon}
                                    />
                                    <Text style={styles.prontoButtonText}>PRONTO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={[
                        { marginRight: 20 },
                        isCurrentScreen && { borderTopWidth: 2, borderTopColor: "white" },
                    ]}
                >
                    <Text style={styles.footerButtonText}>Comandas Ativas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("TelaHistoricoCozinha")}>
                    <Text style={styles.footerButtonText}>Histórico</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TelaAtivasCozinha;