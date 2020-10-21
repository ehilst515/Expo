import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function About() {
    function handleOpenWithWebBrowser() {
        WebBrowser.openBrowserAsync('https://github.com/ehilst515/');
    };

    return (
        <>
            <View style={styles.container}>
                <Text>This app was created using Expo by Enrique Hilst. See this project and more in my GitHub profile!</Text>
            </View>
            <Button
                title="Open GitHub Profile"
                onPress={handleOpenWithWebBrowser}
                style={styles.button}
            />
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 40,
        borderRadius: 5,
        marginTop: 10
    },
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 10
    }
});