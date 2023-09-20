import { useState } from "react";
import { StyleSheet, Text,View , SafeAreaView, TouchableOpacity } from "react-native";
export default function App() {
    const [player, setplayer] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');
    const options = ["Pedra", "Papel", "Tesoura"];
    const handleChoice = (choice) => {
        const computer = options[Math.floor(Math.random() * options.length)];
        setplayer(choice);
        setComputerChoice(computer);
        if (choice === computer) {
            setResult("Empate");
        } else if (
            (choice === "Pedra" && computer === "Tesoura") ||
            (choice ==="Papel" && computer === "Pedra") ||
            (choice === "Tesoura" && computer === "Papel")
        ) {
            setResult("ganhou")
        } else {
            setResult(" Perdeu")
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => handleChoice("Pedra")}>
                    <Text>Pedra</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleChoice("Papel")}>
                    <Text>Papel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleChoice("Tesoura")}>
                    <Text>Tesoura</Text>
                </TouchableOpacity>
            </View>
                <View>
                    <Text>Você escolheu {player}</Text>
                    <Text> Computador escolheu: {computerChoice}</Text>
                    <Text> Resultado: {result}</Text>
                </View>
    
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
