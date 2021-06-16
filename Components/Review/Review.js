import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

const Review = () => {
    return (
        <ScrollView>
         
           <View style={styles.container}>
           <Text style={styles.review}>Coming Soon! </Text>
           </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    review: {
        margin: 20,
        color: "white",
        alignSelf: "center",
        fontSize: 20,
        flex: 1,
        padding: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderLeftWidth: 0, 
        borderRadius: 8,
        backgroundColor: "tomato",
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:250,
    }
});

export default Review;
