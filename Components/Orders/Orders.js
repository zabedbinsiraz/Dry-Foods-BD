import React, { useEffect, useState } from "react";
import {
    Button,
    Alert,
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";
import { getFoodByID } from "../../assets/data/data";

const Orders = ({ route, navigation }) => {
    const foodId = route?.params?.foodId;
    const [food, setFood] = useState(null);

    useEffect(() => {
        setFood(getFoodByID(foodId));
    }, [foodId]);

    return (
        <View style={styles.cardWrapper}>
            <Text style={styles.heading}>Your Order details</Text>
            {foodId ? (
                <>
                    <ScrollView>
                        <Image source={food?.image} resizeMode="cover" />

                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>
                                {" "}
                                Food no {foodId}{" "}
                            </Text>
                            <Text style={styles.cards}>
                                Food Name :{" "}
                                <Text style={styles.cardTitle}>
                                    {food?.title}
                                </Text>{" "}
                            </Text>
                            <Text style={styles.cardDetails}>
                                {food?.description}{" "}
                            </Text>
                            <Text style={styles.cards}>
                                Price :{" "}
                                <Text style={styles.cardTitle}>
                                    ${food?.price}
                                </Text>{" "}
                            </Text>
                            <Button
                                style={styles.button}
                                title="Order Now!"
                                color="#2f4f4f"
                                onPress={() => {
                                    Alert.alert(
                                        "success",
                                        "Your Order is complete"
                                    );
                                    navigation.navigate("Home");
                                }}
                            />
                        </View>
                    </ScrollView>
                </>
            ) : (
                <Text style={styles.noFood}>
                   
                    Please Select a food from{" "}
                    <Button
                        onPress={() => navigation.navigate("Home")}
                        title="Home"
                    />{" "}
                    tab
                </Text>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        width:'100%'
    },

    wrapper: {},

    cardWrapper: {
        marginTop: 100,
        width: "90%",
        alignSelf: "center",
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: "row",
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImageWrapper: {
        flex: 1,
    },
    cardImg: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 100,
        borderColor: "#ccc",
        alignSelf: "center",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#fff",
    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 15,
    },
    cardDetails: {
        fontSize: 10,
        color: "#444",
    },
    cards: {
        fontSize: 15,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center",
        color: "#2f4f4f",
        padding: 20,
    },
    noFood: {
        padding: 10,
        color: "#2f4f4f",
        alignSelf: "center",
    },
});

export default Orders;
