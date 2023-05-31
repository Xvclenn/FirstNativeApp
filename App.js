import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, FlatList } from "react-native";
import colors from "./assets/colors/colors";

export default App = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        const newTodo = {
            todo: todo,
        };
        setTodos([...todos, newTodo]);
        setTodo("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                    style={styles.input}
                    placeholder="Add notes"
                />
                <View style={styles.button}>
                    <Button onPress={handleAddTodo} color="white" title="Add" />
                </View>
            </View>

            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.todo}>
                        <Text style={styles.todoText}>{item.todo}</Text>
                        {/* <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} /> */}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        marginTop: 30,
        marginBottom: 50,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: "row",
        // justifyContent: "space-between",
        marginBottom: 30,
        paddingBottom: 50,
    },
    input: {
        borderColor: "transparent",
        borderWidth: 0.5,
        backgroundColor: "#ccc",
        borderRadius: 50,
        paddingHorizontal: 20,
        width: 270,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    button: {
        paddingHorizontal: 10,
        borderColor: "transparent",
        borderRadius: 100,
        borderWidth: 0.5,
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },

    list: {
        width: "100%",
    },
    todo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    todoText: {
        flex: 1,
        marginRight: 10,
    },
});
