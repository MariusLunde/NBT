import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const LinkItem = ({text, navigate = false} : any) => {

    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigate ? navigation.navigate(navigate as never) : ""}} style={styles.row}>
                <View>
                    <Image source={require(`../../assets/icon.png`)} style={styles.image}/>
                </View>
                <View>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 70,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        backgroundColor: "#c2c2c2"
    },
    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: "column"
    },
    text: {
        marginTop: 10,
        fontSize: 25,
        paddingLeft: 20
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 15,
        margin: 5
    }
})

export default LinkItem