/* Add necessary imports */
import React, { useState, useEffect } from 'react';
import { Provider as PaperProvider, List, Divider, Text } from 'react-native-paper';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Overlay from "../../components/Overlay";
import { useNavigation } from '@react-navigation/native';
// Main Component
const TwoColumnLayout = () => {
    const navigation = useNavigation();

    const [menuExpanded, setMenuExpanded] = useState(true);

    const toggleMenu = () => {
        setMenuExpanded(prev => !prev);
    };

    // Determine if it's the TwoColumnLayout screen; replace this condition with your actual check if needed
    const isOnTwoColumnLayoutScreen = true; // This should be set based on your routing or context logic

    const [showOverlay, setShowOverlay] = useState(true); // Example toggle state

    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const targetTime = new Date();
        targetTime.setHours(22, 0, 0, 0);

        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetTime.getTime() - now.getTime();

            if (timeDifference <= 0) {
                setTimeLeft('00:00:00');
                clearInterval(interval);
            } else {
                const hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, '0');
                const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
                const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');
                setTimeLeft(`${hours}:${minutes}:${seconds}`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <View style={[styles.menuContainer, menuExpanded ? styles.menuExpanded : styles.menuCollapsed]}>
                    <View style={styles.topSection}>
                        <TouchableOpacity onPress={toggleMenu} style={styles.toggleButton}>
                            <List.Icon icon={menuExpanded ? 'chevron-left' : 'chevron-right'} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.avatarSection}>
                        <Image
                            source={require('../../assets/images/avatar.png')}
                            style={{ width: menuExpanded ? 120 : 40, height: menuExpanded ? 120 : 40 }}
                        />
                        {menuExpanded && <Text style={styles.avatarText}>Lucas</Text>}
                    </View>
                    <Divider style={styles.divider} />
                    <List.Section
                        style={[styles.listSection, menuExpanded && { alignItems: 'center' }]}>
                        <List.Item
                            title={menuExpanded ? "Painel" : ''}
                            left={() => <List.Icon icon="view-dashboard" color={isOnTwoColumnLayoutScreen ? '#000' : '#fff'} />}
                            titleStyle={[
                                styles.listItemTitle,
                                !menuExpanded && styles.centeredListItemTitle,
                                isOnTwoColumnLayoutScreen && styles.highlightedListItemTitle
                            ]}
                            style={isOnTwoColumnLayoutScreen ? styles.highlightedListItem : {}}
                        />
                        <List.Item
                            title={menuExpanded ? "Finanças" : ''}
                            left={() => <List.Icon icon="finance" color="#fff" />}
                            titleStyle={[
                                styles.listItemTitle,
                                !menuExpanded && styles.centeredListItemTitle
                            ]}
                        />
                        <List.Item
                            title={menuExpanded ? "Confg. Pedidos" : ''}
                            left={() => <List.Icon icon="cart" color="#fff" />}
                            titleStyle={[
                                styles.listItemTitle,
                                !menuExpanded && styles.centeredListItemTitle
                            ]}
                        />
                        <List.Item
                            title={menuExpanded ? "Confg. Garçom" : ''}
                            left={() => <List.Icon icon="account" color="#fff" />}
                            titleStyle={[
                                styles.listItemTitle,
                                !menuExpanded && styles.centeredListItemTitle
                            ]}
                            onPress={() => navigation.navigate('TelaGarcomGerente')}
                        />
                        <List.Item
                            title={menuExpanded ? "Configurações" : ''}
                            left={() => <List.Icon icon="cog" color="#fff" />}  // Corrected icon name for setting
                            titleStyle={[
                                styles.listItemTitle,
                                !menuExpanded && styles.centeredListItemTitle
                            ]}
                        />
                    </List.Section>
                    {menuExpanded && (
                        <View style={styles.footerSection}>
                            <Image
                                source={require('../../assets/images/logo.png')}
                                style={{
                                    width: menuExpanded ? 140 : 40, // Adjust width as necessary
                                    height: menuExpanded ? 80 : 20, // Adjust height as necessary
                                    resizeMode: 'contain'           // Ensures the logo maintains its aspect ratio
                                }}
                            />
                        </View>
                    )}
                </View>
                    <View style={styles.contentContainer}>
                        {/* First Line: 4 Equal Containers */}
                            <View style={styles.row}>
                                <View style={styles.quarterContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image
                                            source={require('../../assets/images/iconGacom.png')}
                                            style={styles.logoImage}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.logoText}>
                                                Melhor Garçom
                                            </Text>
                                        </View>
                                    </View>

                                        <Text style={styles.priceText}>{showOverlay && (
                                            <>R$ 3.551,05<Overlay />
                                            </>
                                        )}</Text>

                                </View>
                                <View style={styles.quarterContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image
                                            source={require('../../assets/images/incoPrato.png')}
                                            style={styles.logoImage}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.logoText}>
                                                Melhor Prato
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={styles.priceText}>{showOverlay && (
                                        <>R$ 3.551,05<Overlay />
                                        </>
                                    )}</Text>
                                </View>
                                <View style={styles.quarterContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image
                                            source={require('../../assets/images/iconHorario.png')}
                                            style={styles.logoImage}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.logoText}>
                                                Horário Pico
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={styles.priceText}>{showOverlay && (
                                        <>R$ 3.551,05<Overlay />
                                        </>
                                    )}</Text>
                                </View>
                                <View style={styles.quarterContainer}>
                                    <View style={styles.logoContainer}>
                                        <Image
                                            source={require('../../assets/images/iconVendas.png')}
                                            style={styles.logoImage}
                                        />
                                        <View style={styles.textContainer}>
                                            <Text style={styles.logoText}>
                                                Vendas
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={styles.priceText}>{showOverlay && (
                                        <>R$ 3.551,05<Overlay />
                                        </>
                                    )}</Text>
                                </View>

                        </View>

                        {/* Second Line: 2/3 and 1/3 Containers */}
                        <View style={styles.row}>
                            <View style={styles.twoThirdsContainer}>
                                <Text style={styles.topText}>Avaliações do Cliente</Text>
                                {showOverlay && (
                                    <>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={styles.handsContainer}>
                                                <View style={styles.likeHand}>
                                                    <Image
                                                        source={require('../../assets/images/like.png')}
                                                    />
                                                    <Text>Gostei</Text>
                                                </View>
                                                <View style={styles.dislikeHand}>
                                                    <Image
                                                        source={require('../../assets/images/dislike.png')}
                                                    />
                                                    <Text>Não gostei</Text>
                                                </View>
                                            </View>
                                            <Divider style={styles.dividerLine} />
                                            <View style={styles.chartSection}>
                                                <View style={styles.textImageContainer}>
                                                    <Text style={styles.chartLabel}>Banheiros</Text>
                                                    <Image
                                                        source={require('../../assets/images/banheiros.png')}
                                                        style={styles.chartImage}
                                                    />
                                                </View>
                                                <View style={styles.textImageContainer}>
                                                    <Text style={styles.chartLabel}>Atendimento</Text>
                                                    <Image
                                                        source={require('../../assets/images/banheiros.png')}
                                                        style={styles.chartImage}
                                                    />
                                                </View>
                                                <View style={styles.textImageContainer}>
                                                    <Text style={styles.chartLabel}>Cardápio</Text>
                                                    <Image
                                                        source={require('../../assets/images/banheiros.png')}
                                                        style={styles.chartImage}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <Overlay />
                                    </>
                                )}
                            </View>
                            <View style={styles.oneThirdContainer}>
                                {showOverlay && (
                                    <>
                                <View style={styles.handsContainer}>
                                    <View style={styles.likeHand}>
                                        <Image
                                            source={require('../../assets/images/like.png')}
                                        />
                                        <Text>Gostei</Text>
                                    </View>
                                    <View style={styles.dislikeHand}>
                                        <Image
                                            source={require('../../assets/images/dislike.png')}
                                        />
                                        <Text>Não gostei</Text>
                                    </View>
                                </View>
                                        <Overlay />
                                    </>
                                )}
                            </View>
                        </View>

                        {/* Third Line: 2/3 and 1/3 Containers */}
                        <View style={styles.row}>
                            <View style={styles.twoThirdsContainer}>
                                <Text style={styles.topText}>Avaliações do Cliente</Text>
                                {showOverlay && (
                                    <>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={styles.handsContainer}>
                                                <View style={styles.likeHand}>
                                                    <Image
                                                        source={require('../../assets/images/like.png')}
                                                    />
                                                    <Text>Gostei</Text>
                                                </View>
                                                <View style={styles.dislikeHand}>
                                                    <Image
                                                        source={require('../../assets/images/dislike.png')}
                                                    />
                                                    <Text>Não gostei</Text>
                                                </View>
                                            </View>
                                            <Divider style={styles.dividerLine} />
                                            <View style={styles.chartSection}>
                                                <View style={styles.textImageContainer}>
                                                    <Text style={styles.chartLabel}>Banheiros</Text>
                                                    <Image
                                                        source={require('../../assets/images/banheiros.png')}
                                                        style={styles.chartImage}
                                                    />
                                                </View>
                                                <View style={styles.textImageContainer}>
                                                    <Text style={styles.chartLabel}>Atendimento</Text>
                                                    <Image
                                                        source={require('../../assets/images/banheiros.png')}
                                                        style={styles.chartImage}
                                                    />
                                                </View>
                                                <View style={styles.textImageContainer}>
                                                    <Text style={styles.chartLabel}>Cardápio</Text>
                                                    <Image
                                                        source={require('../../assets/images/banheiros.png')}
                                                        style={styles.chartImage}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <Overlay />
                                    </>
                                )}
                            </View>
                            <View style={styles.oneThirdContainer}>
                                {showOverlay && (
                                    <>
                                        <View style={styles.handsContainer}>
                                            <View style={styles.likeHand}>
                                                <Image
                                                    source={require('../../assets/images/like.png')}
                                                />
                                                <Text>Gostei</Text>
                                            </View>
                                            <View style={styles.dislikeHand}>
                                                <Image
                                                    source={require('../../assets/images/dislike.png')}
                                                />
                                                <Text>Não gostei</Text>
                                            </View>
                                        </View>
                                        <Overlay />
                                    </>
                                )}
                            </View>
                        </View>

                        {/* Fourth Line: 3 Equal Containers */}
                        <View style={styles.row}>
                            <View style={styles.thirdContainer}>
                                {showOverlay && (
                                    <>
                                <Image
                                    source={require('../../assets/images/topGar.png')}
                                    style={styles.imageCentered}
                                />
                                        <Overlay />
                                    </>
                                )}
                            </View>
                            <View style={styles.thirdContainer}>
                                {showOverlay && (
                                    <>
                                        <Image
                                            source={require('../../assets/images/topPratos.png')}
                                            style={styles.imageCentered}
                                        />
                                        <Overlay />
                                    </>
                                )}
                            </View>
                            <View style={styles.thirdContainer}>
                                {showOverlay && (
                                    <>
                                        <Image
                                            source={require('../../assets/images/topGar.png')}
                                            style={styles.imageCentered}
                                        />
                                        <Overlay />
                                    </>
                                )}
                            </View>
                        </View>

                        {/* Fifth Line: 3 Containers, Smaller Height */}
                        <View style={styles.row}>
                            <View style={styles.thirdContainerSmall}>
                                <View style={styles.textWithImageContainer}>
                                    <Image
                                        source={require('../../assets/images/plus.png')}
                                    />
                                    <Text style={styles.incluirMesaText}>Incluir Mesa</Text>
                                </View>
                            </View>
                            <View style={styles.thirdContainerSmall}>{showOverlay && (
                                <><Overlay />
                                </>
                            )}</View>
                            <View style={styles.thirdContainerSmall}>
                                <View style={styles.countdownContainer}>
                                    <Text style={styles.titleText}>Tempo para Fechamento</Text>
                                    <Text style={styles.countdownText}>{timeLeft}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
            </SafeAreaView>
        </PaperProvider>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000000',
    },
    menuContainer: {
        backgroundColor: '#1E1E1E',
        padding: 10,
    },
    menuExpanded: {
        width: '10%',
    },
    menuCollapsed: {
        width: '3%',
    },
    topSection: {
        alignItems: 'flex-start',
    },
    toggleButton: {
        marginBottom: 10,
    },
    avatarSection: {
        alignItems: 'center',
        marginTop: 10,
    },
    avatarText: {
        color: '#fff',
        marginTop: 5,
        fontSize: 24,
    },
    divider: {
        backgroundColor: '#fff',
        marginVertical: 10,
        height: 1,
        alignSelf: 'center',
        width: '80%',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
    listSection: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    listItemTitle: {
        color: '#fff',
        fontSize: 14,
    },
    centeredListItemTitle: {
        textAlign: 'center',
    },
    highlightedListItemTitle: {
        color: '#000',
        borderRadius: 10,
    },
    highlightedListItem: {
        backgroundColor: '#E2E1E1',
    },
    footerSection: {
        alignItems: 'center',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    quarterContainer: {
        margin: 5,
        flex: 1,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    oneThirdContainer: {
        flex: 1,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#1E1E1E',
    },
    thirdContainer: {
        flex: 2,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCentered: {
        resizeMode: 'contain',
        width: '80%',
        height: undefined,
        aspectRatio: 1
    },

    thirdContainerSmall: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#1E1E1E',
        height: 80,
        justifyContent: 'center',  // Centers items vertically
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
    },
    logoImage: {
        width: 80,
            height: 80,
            resizeMode: 'contain',
            marginRight: 10, // Space between image and text
    },
    textContainer: {
        justifyContent: 'center',
    },
    logoText: {
        fontSize: 24,
            color: '#FFFFFF',
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 24,
            color: '#000',
            fontWeight: 'bold',
        backgroundColor: '#D9D9D9',
        padding: 5,
        width: '80%',
        borderRadius: 5,
        textAlign: 'center',
            // Shadow for iOS
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 1,

            // Elevation for Android
            elevation: 2,
    },

    //Av. Cliente
    twoThirdsContainer: {
        borderRadius: 10,
        flex: 2,
        marginHorizontal: 5,
        backgroundColor: '#1E1E1E',
        alignItems: 'center',
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    handsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,  // Reduce the vertical margin
        paddingHorizontal: 10, // Add some padding for space around the content
    },
    textImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    chartImage: {
        marginLeft: 10,
    },
    likeHand: {
        alignItems: 'center',
        marginEnd: 50,
    },
    dislikeHand: {
        alignItems: 'center',
        marginEnd: 50,
    },
    dividerLine: {
        backgroundColor: '#fff',
        height: '90%',
        width: 1,
        alignSelf: 'center',
        marginEnd: 50,
    },
    chartSection: {
        marginVertical: 10,
    },
    chartLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    //Mesa
    incluirMesaText: {
        fontSize: 32,
        color: '#25D597',
        marginLeft: 5,
    },
    textWithImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    //Fechar
    countdownContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    titleText: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 5,
    },
    countdownText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'red',
    },
});

export default TwoColumnLayout;