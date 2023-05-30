import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default App = () => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<TextInput style={styles.input} placeholder="Add notes" />
				<Button style={styles.button} title="hi" />
			</View>
			<View style={styles.middle}>
				<Text>hi</Text>
			</View>
			<View style={styles.bottom} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor: "#fff",
		padding: 20,
		marginTop: 50,
		marginBottom: 50,
	},
	top: {
		flex: 0.2,
		flexDirection: "row",
		backgroundColor: "grey",
		borderWidth: 5,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	middle: {
		flex: 0.2,
		backgroundColor: "beige",
		borderWidth: 5,
	},
	bottom: {
		flex: 0.2,
		backgroundColor: "pink",
		borderWidth: 5,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},

	input: {},
	button: {},
});
