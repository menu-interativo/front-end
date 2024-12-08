/* Add necessary imports */
import React, { useState } from 'react';
import { Provider as PaperProvider, List, Avatar, Divider, Text } from 'react-native-paper';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import TwoColumnLayout from "./telaPrincipal.adm";


// Main Component
const TelaGarcomGerente = () => {
    const navigation = useNavigation();

    const [menuExpanded, setMenuExpanded] = useState(true);

    const toggleMenu = () => {
        setMenuExpanded(prev => !prev);
    };

    // Determine if it's the TwoColumnLayout screen; replace this condition with your actual check if needed
    const isOnTwoColumnLayoutScreen = true; // This should be set based on your routing or context logic

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
                            left={() => <List.Icon icon="view-dashboard" color="#fff" />}
                            titleStyle={[
                                styles.listItemTitle,
                                !menuExpanded && styles.centeredListItemTitle
                            ]}
                            onPress={() => navigation.navigate('TwoColumnLayout')}

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
                            left={() => <List.Icon icon="account" color={isOnTwoColumnLayoutScreen ? '#000' : '#fff'} />}
                            titleStyle={[
                                styles.listItemTitle,
                                !menuExpanded && styles.centeredListItemTitle,
                                isOnTwoColumnLayoutScreen && styles.highlightedListItemTitle
                            ]}
                            style={isOnTwoColumnLayoutScreen ? styles.highlightedListItem : {}}
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
                    <View style={styles.configContainer}>
                        <Text style={styles.configText}>Configuração de garçom</Text>
                    </View>
                        <View style={styles.smallContainersSection}>
                            {/* Small containers on the left side */}
                                <View style={styles.imageAndTextContainer}>
                                    <Text style={styles.editarGarText}>Editar Garçom</Text>
                                    <Image
                                        source={require('../../assets/images/editarGar.png')}
                                        style={styles.editarGarImage}
                                    />
                                </View>
                            <View style={styles.adicionarContainer}>
                                <Text style={styles.editarGarText}>Adicionar Garçom</Text>
                                <Image
                                    source={require('../../assets/images/adicGar.png')}
                                    style={styles.editarGarImage}
                                />
                            </View>
                        </View>
                        <Divider style={styles.dividerData} />
                        <View style={styles.bottomBlackContainer}>
                            {/* Example of repeated containers */}
                            <View style={styles.grayContainer}><Text style={styles.randomText}>Lucas Araújo Amorim</Text></View>
                            <View style={styles.grayContainer}><Text style={styles.randomText}>Nicolas Dias Xavier</Text></View>
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
    },
    highlightedListItem: {
        backgroundColor: '#E2E1E1',
        borderRadius: 10,
    },
    footerSection: {
        alignItems: 'center',
        marginTop: 10,
    },

    //configuração
    configContainer: {
        backgroundColor: '#1E1E1E',
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    configText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    smallContainersSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

        marginBottom: 10,
    },
    smallContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#1E1E1E',
        marginRight: 10,
        borderRadius: 10,

    },
    bottomBlackContainer: {
        padding: 10,
    },
    grayContainer: {
        backgroundColor: '#1E1E1E',
        padding: 5,
        marginBottom: 5,
        borderRadius: 10,
    },
    randomText: {
        color: '#fff',
        fontSize: 24,
    },

    //editar
    imageAndTextContainer: {
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#230B37',
        borderRadius:10,

    },
    adicionarContainer: {
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FCFCFC47',
        borderRadius:10,

    },
    editarGarImage: {
        width: 280,
        height: 140,
        resizeMode: 'contain',
    },
    editarGarText: {
        color: '#fff',
        fontSize: 32,
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        textAlign: 'center',
    },
    dividerData: {
        backgroundColor: '#fff',
        marginVertical: 10,
        height: 1,
        alignSelf: 'center',
        width: '98%',

    }
});

export default TelaGarcomGerente;