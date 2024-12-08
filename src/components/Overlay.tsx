import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overlay = () => {
    return (
        <View style={styles.overlay}>
            <Text style={styles.overlayText}>Informações insuficientes</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.95)', // Increased opacity for full obscuring
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10, // Ensure it's on top of other components
    },
    overlayText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Overlay;