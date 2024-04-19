import { StatusBar } from 'expo-status-bar';
import { cloneElement, useState } from 'react';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    const [name, setName] = useState("");
    return (
        <View style={styles.container}>
            <Text>What is your name ?</Text>
            <TextInput
                style={styles.TextInput}
                placeHolder="Phong"
                placeholderTextColor="#gray"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                title='Say Hello'
                onPress={() => {
                    alert(`Hello, ${name}!`)
                    setName("");
                }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    label: {
        fontWeight:"bold",
        fontSize: 18,
    },
    TextInput:{
        marginTop: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 10,
        borderRadius: 5,
        borderColor: "#black",
    },

    }
)
